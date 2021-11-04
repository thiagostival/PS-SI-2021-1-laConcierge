import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const Header = styled.header`
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

  > form {
    flex: 1;
    margin: 0 50px;
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
  padding: 50px;

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
