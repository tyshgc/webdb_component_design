import React from "react";
import styled from "styled-components";

interface Props {
  height?: number | string;
}
export const LayoutSpacer = (props: Props) => <StyledSpacer {...props} />;
const StyledSpacer = styled.i<Props>`
  display: block;
  height: ${props => props.height || "0"};
`;
