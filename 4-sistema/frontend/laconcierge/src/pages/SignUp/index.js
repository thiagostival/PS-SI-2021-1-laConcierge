import React, { useCallback, useRef, useState } from "react";
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
import {
  Container,
  Content,
  AnimationContainer,
  Background,
  ContainerRadio,
  ContainerType,
} from "./styles";

// SERVICES
import api from "../../services/api";

// HOOKS
import { useToast } from "../../hooks/Toast";

// UTILS
import { getValidationErrors } from "../../utils/getValidationErrors";
import { InputRadio } from "../../components/InputRadio";

export const SignUp = () => {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const history = useHistory();

  const [typeUser, setTypeUser] = useState("");

  const handleSubmit = useCallback(
    async (d) => {
      try {
        formRef.current?.setErrors({});
        const data = { ...d, type: typeUser };

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          type: Yup.string().oneOf(["client", "establishment"]),
          cnpj: Yup.string().when("type", {
            is: "establishment",
            then: Yup.string()
              .min(14, "Mínimo de 14 dígitos")
              .max(14, "Máximo de 14 dígitos")
              .required("CNPJ obrigatório"),
          }),
          cpf: Yup.string().when("type", {
            is: "client",
            then: Yup.string()
              .min(11, "Mínimo de 11 dígitos")
              .max(11, "Máximo de 11 dígitos")
              .required("CPF obrigatório"),
          }),
          birth_date: Yup.date().when("type", {
            is: "client",
            then: Yup.date().required("Data de Nascimento obrigatória"),
          }),
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
          description: "Você já pode fazer seu logon!",
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
    [addToast, history, typeUser]
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

            <ContainerRadio>
              <span>Tipo de usuario</span>
              <div>
                <InputRadio
                  id="client"
                  label="Cliente"
                  name="type"
                  value="client"
                  onChange={() => setTypeUser("client")}
                />
                <InputRadio
                  id="establishment"
                  label="Estabelecimento"
                  name="type"
                  value="establishment"
                  onChange={() => setTypeUser("establishment")}
                />
              </div>
            </ContainerRadio>

            {typeUser === "client" && (
              <ContainerType>
                <Input
                  name="cpf"
                  type="text"
                  placeholder="CPF"
                  maxLength={11}
                />

                <Input name="birth_date" type="date" placeholder="Data Nasc" />
              </ContainerType>
            )}

            {typeUser === "establishment" && (
              <ContainerType>
                <Input
                  name="cnpj"
                  type="text"
                  placeholder="CNPJ"
                  maxLength={14}
                />
              </ContainerType>
            )}

            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              containerStyle={{ marginTop: 8 }}
            />
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
