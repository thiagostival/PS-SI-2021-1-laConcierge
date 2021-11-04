import React, { useCallback, useEffect, useState } from "react";
import { FiPower } from "react-icons/fi";

// ASSETS
import icon from "../../../assets/icon.png";

// COMPONENTS
import { Loading } from "../../../components/Loading";
import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";

// STYLES
import {
  Card,
  Content,
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

export const DashboardEstablishment = () => {
  const { signOut, user } = useAuth();
  const { addToast } = useToast();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [establishment, setEstablishment] = useState(undefined);

  const handleSubmit = useCallback(
    async (d) => {
      try {
        setSaving(true);
        const { data } = await api.post(`/establishment/occupancy`, d);

        console.log({ data });

        setEstablishment((oldValue) => ({ ...oldValue, occupancy: d }));
        setSaving(false);
      } catch (err) {
        setSaving(false);

        addToast({
          type: "error",
          title: "Erro ao Atualizar Dados",
          description:
            "Ocorreu um erro ao atualzar os dados, tente novamente mais tarde!",
        });
      }
    },
    [addToast]
  );

  const handleLoad = useCallback(async () => {
    try {
      const { data } = await api.get(`establishment/${user.id}`);

      console.log({ data });

      setEstablishment(data);
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
  }, [addToast, user]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <Wrapper>
      <Header>
        <HeaderContent>
          <img src={icon} alt="laconcierge" />

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Title>Dados</Title>

        {loading && <Loading />}

        {!loading && (
          <WrapperContent>
            {establishment && (
              <Card>
                <span>
                  <b>Capacidade Max:</b>{" "}
                  {establishment?.occupancy?.max || "---"}
                </span>
                <span>
                  <b>Capacidade Ocupada:</b>{" "}
                  {establishment?.occupancy?.busy || "---"}
                </span>
                <span>
                  <b>Capacidade Disponivel: </b>
                  {establishment?.occupancy?.max &&
                  establishment?.occupancy?.busy
                    ? establishment?.occupancy?.max -
                      establishment?.occupancy?.busy
                    : " ---"}
                </span>
                <span>
                  <b>Indice: </b>
                  {establishment?.occupancy?.max &&
                  establishment?.occupancy?.busy
                    ? establishment?.occupancy?.busy /
                      establishment?.occupancy?.max
                    : " ---"}
                </span>

                <Button
                  type="button"
                  disabled={saving}
                  onClick={() => setIsOpenModal(!isOpenModal)}
                >
                  Atualizar Ocupaçao
                </Button>
              </Card>
            )}

            {!establishment && <span>Nao encontrado</span>}
          </WrapperContent>
        )}
      </Content>

      {isOpenModal && (
        <Modal
          close={() => setIsOpenModal(false)}
          handleSubmit={handleSubmit}
        />
      )}
    </Wrapper>
  );
};
