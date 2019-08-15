import React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
}

export const Heading = (props: Props) => {
  const { text } = props;
  return <StyledHeadingOne>{text}</StyledHeadingOne>;
};

const StyledHeadingOne = styled.h1``;
