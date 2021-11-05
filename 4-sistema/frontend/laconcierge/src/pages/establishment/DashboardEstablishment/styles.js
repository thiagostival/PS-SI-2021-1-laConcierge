import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 1120px;
  padding-top: 5px;

  overflow: auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const WrapperContent = styled.div``;

export const Establishment = styled.button`
  display: flex;
  align-items: center;

  gap: 10px;

  > img {
    width: 50px;
    height: 50px;
  }

  > span {
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  margin: 20px 0;
  padding: 10px;

  > span {
    font-size: 1.25rem;
  }
`;
