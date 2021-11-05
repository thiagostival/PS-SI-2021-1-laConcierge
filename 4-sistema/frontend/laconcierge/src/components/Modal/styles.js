import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 80%;
  max-width: 600px;

  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  background: #fff;

  > form {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    color: #232129;
    margin-bottom: 25px;
  }

  > form {
    display: flex;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;

      > span {
        color: #232129;
        font-weight: bold;
      }

      > div {
        margin: 0;
      }
    }
  }

  padding: 15px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  padding: 15px;
`;

export const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.5);

  filter: brightness(0.5);
`;
