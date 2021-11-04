import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiPower, FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";

// ASSETS
import icon from "../../../assets/icon.png";
import utensils from "../../../assets/utensils.png";

// COMPONENTS
import { Input } from "../../../components/Input";
import { Loading } from "../../../components/Loading";

// STYLES
import {
  Content,
  Establishment,
  Header,
  HeaderContent,
  Title,
  Wrapper,
  WrapperContent,
} from "./styles";

// HOOKS
import { useAuth } from "../../../hooks/Auth";
import { useToast } from "../../../hooks/Toast";

// SERVICES
import api from "../../../services/api";

export const DashboardClient = () => {
  const { signOut } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [establishment, setEstablishment] = useState([]);
  const [establishmentOriginal, setEstablishmentOriginal] = useState([]);

  const formRef = useRef(null);

  const handleSearch = useCallback(
    (value) => {
      const filter = establishmentOriginal.filter((item) =>
        item.user.name.includes(value)
      );

      setEstablishment(filter);
    },
    [establishmentOriginal]
  );

  const handleLoad = useCallback(async () => {
    try {
      const { data } = await api.get("establishment");

      setEstablishment(data);
      setEstablishmentOriginal(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      addToast({
        type: "error",
        title: "Erro ao Carregar Estabelecimentos",
        description:
          "Ocorreu um erro ao carregar os estabelecimentos, tente novamente mais tarde!",
      });
    }
  }, [addToast]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <Wrapper>
      <Header>
        <HeaderContent>
          <img src={icon} alt="laconcierge" />

          <Form ref={formRef} onSubmit={({ search }) => handleSearch(search)}>
            <Input
              type="text"
              name="search"
              icon={FiSearch}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </Form>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Title>Estabelecimentos</Title>

        {loading && <Loading />}

        {!loading && (
          <WrapperContent>
            {!!establishment.length && establishment.map((item) => (
              <Establishment
                key={item.id}
                type="button"
                onClick={() => history.push(`/client/establishment/${item.id}`)}
              >
                <img src={utensils} alt="utensils icon" />
                <span>{item.user.name}</span>
              </Establishment>
            ))}

            {!establishment.length && (
              <span>Nao encontrado</span>
            )}
          </WrapperContent>
        )}
      </Content>
    </Wrapper>
  );
};
