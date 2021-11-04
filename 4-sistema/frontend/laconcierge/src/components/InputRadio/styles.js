import styled, { css } from "styled-components";

import { Tooltip } from "../Tooltip";

export const Container = styled.div`
  max-width: 100%;

  color: #f4ede8;

  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: "#666360";
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
