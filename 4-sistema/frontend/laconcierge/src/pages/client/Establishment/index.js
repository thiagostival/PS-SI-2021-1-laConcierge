import React, { useCallback, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

// ASSETS
import menu from "../../../assets/menu.png";
import restaurant from "../../../assets/restaurant.png";

import {
  Card,
  Content,
  Header,
  HeaderContent,
  Menu,
  Poster,
  Wrapper,
} from "./styles";

// COMPONENTS
import { Loading } from "../../../components/Loading";

// HOOKS
import { useToast } from "../../../hooks/Toast";

// SERVICES
import api from "../../../services/api";

export function Establishment() {
  const { addToast } = useToast();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);

  const { est_id } = useParams();
  const history = useHistory();

  const handleLoad = useCallback(async () => {
    try {
      const { data } = await api.get(`establishment/${est_id}`);

      console.log({ data });
      setData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      addToast({
        type: "error",
        title: "Erro ao Carregar Estabelecimento",
        description:
          "Ocorreu um erro ao carregar os dados do estabelecimento, tente novamente mais tarde!",
      });
    }
  }, [addToast, est_id]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <Wrapper>
      <Header>
        <HeaderContent>
          <button type="button" onClick={() => history.goBack()}>
            <FiArrowLeft />
          </button>

          <span>{data?.user?.name}</span>
        </HeaderContent>
      </Header>

      {loading && <Loading />}

      {!loading && !!data && (
        <Content>
          <Poster>
            <img src={data?.user?.avatar_url || restaurant} alt="" />
          </Poster>

          <Card>
            <span>
              <b>Nome:</b> {data?.user?.name || "---"}
            </span>
            <span>
              <b>Endereço:</b> {data?.user?.address || "---"}
            </span>
            <span>
              <b>Horario de Funcionamento:</b>
              {data?.user?.openning || " ---"}
            </span>
          </Card>

          <Card>
            <span>
              <b>Capacidade Max:</b> {data?.occupancy?.max || "---"}
            </span>
            <span>
              <b>Capacidade Ocupada:</b> {data?.occupancy?.busy || "---"}
            </span>
            <span>
              <b>Capacidade Disponivel: </b>
              {data?.occupancy?.max && data?.occupancy?.busy
                ? data?.occupancy?.max - data?.occupancy?.busy
                : "---"}
            </span>
            <span>
              <b>Indice: </b>
              {data?.occupancy?.max && data?.occupancy?.busy
                ? data?.occupancy?.busy / data?.occupancy?.max
                : "---"}
            </span>
          </Card>

          <Menu>
            <img alt="" src={menu} />
          </Menu>
        </Content>
      )}
    </Wrapper>
  );
}
