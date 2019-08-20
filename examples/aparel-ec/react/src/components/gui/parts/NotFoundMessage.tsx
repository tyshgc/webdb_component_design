/**
 * NotfoundMessage GUI Parts Component
 */
import React from "react";
import styled from "styled-components";

export const NotFoundMessage = () => {
  return <StyledMessage>何もみつかりませんでした…</StyledMessage>;
};

const StyledMessage = styled.div`
  font-size: 1.6em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;
