import React, { useCallback, useRef } from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";

// ASSETS
import logoImg from "../../assets/icon.png";

// COMPONENTS
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

// STYLES
import { Container, Content, AnimationContainer, Background } from "./styles";

// SERVICES
import api from "../../services/api";

// HOOKS
import { useToast } from "../../hooks/Toast";

// UTILS
import { getValidationErrors } from "../../utils/getValidationErrors";

export const SignUp = () => {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().min(6, "Mínimo de 6 dígitos"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post("/users", data);

        history.push("/");

        addToast({
          type: "success",
          title: "Cadastro realizado!",
          description: "Você já pode fazer seu logon no GoBarber!",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Erro no cadastro",
          description: "Ocorreu um erro ao fazer cadastro, tente novamente",
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para Logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};