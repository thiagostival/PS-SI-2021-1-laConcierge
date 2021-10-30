import styled from 'styled-components';

export const WrapperError404 = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    max-width: 900px;
    padding: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-height: 500px) {
      width: 45%;
    }

    > h1 {
      color: #1F2D50;

      white-space: nowrap;

      font-style: italic;
      font-weight: bold;
      font-size: 2.5rem;
      text-transform: uppercase;

      @media (max-width: 900px) {
        font-size: 2rem;
      }

      @media (max-width: 700px) {
        font-size: 1.5rem;
      }
    }

    > a,
    button {
      max-width: 426px;

      @media (max-width: 900px) {
        height: 40px;
      }
    }
  }
`;
