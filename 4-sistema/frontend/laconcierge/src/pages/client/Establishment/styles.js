import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.header`
  max-height: 100px;
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;

    svg {
      color: #fff;
      width: 30px;
      height: 30px;
    }
  }

  > span {
    margin-left: 20px;
    font-size: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  width: 100%;
  height: calc(100% - 100px);
  padding: 50px;
`;

export const Poster = styled.div`
  width: 100%;
  height: 400px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  background: white;

  > img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
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

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 20px;
`;
