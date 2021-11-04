import React from "react";

import { Icon, Wrapper } from "./styles";

export function Loading({ style, size = '4rem', color = "#fff" }) {
  return (
    <Wrapper style={style}>
      <Icon size={size} color={color} />
    </Wrapper>
  );
}
