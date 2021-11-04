import { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { Input } from "../Input";
import { Button } from "../Button";

import { Background, Wrapper, Content, Footer } from "./styles";
// UTILS
import { getValidationErrors } from "../../utils/getValidationErrors";

export function Modal({ close, handleSubmit }) {
  const formRef = useRef(undefined);

  const handleSubmitForm = useCallback(
    async (d) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          max: Yup.string().required("Capacidade maxima obrigatória"),
          busy: Yup.string().required("Ocupaçao obrigatória"),
        });

        await schema.validate(d, {
          abortEarly: false,
        });

        handleSubmit(d);
        close();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [handleSubmit, close]
  );

  return (
    <>
      <Background onClick={close} />

      <Wrapper>
        <Content>
          <h1>Insira os novos dados</h1>
          <Form ref={formRef} onSubmit={handleSubmitForm}>
            <div>
              <span>Max: </span>
              <Input name="max" type="number" placeholder="Capacidade Max" />
            </div>
            <div>
              <span>Ocupado: </span>
              <Input name="busy" type="number" placeholder="Ocupado" />
            </div>
          </Form>
        </Content>

        <Footer>
          <Button type="button" onClick={() => formRef.current.submitForm()}>
            Concluido
          </Button>
        </Footer>
      </Wrapper>
    </>
  );
}
