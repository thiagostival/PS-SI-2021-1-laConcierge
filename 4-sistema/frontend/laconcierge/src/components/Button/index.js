import React from 'react';

import { Container } from './styles';

export const Button = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);
