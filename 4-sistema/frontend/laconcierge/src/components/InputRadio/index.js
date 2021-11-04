import React, { useEffect, useRef } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";

import { Container, Error } from "./styles";

export const InputRadio = ({
  id,
  name,
  label,
  containerStyle = {},
  ...rest
}) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "checked",
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      data-testid="input-container"
    >
      <input
        id={id}
        type="radio"
        defaultChecked={defaultValue}
        ref={inputRef}
        name={name}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};
