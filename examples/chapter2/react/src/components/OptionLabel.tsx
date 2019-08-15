import * as React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
  onClicked?: () => void;
}
export const OptionLabel = (props: Props) => {
  const { text, onClicked } = props;
  return <StyledLabel onClick={onClicked}>{text || "Label"}</StyledLabel>;
};

const StyledLabel = styled.label`
  position: relative;
  top: -7px;
  margin-left: 12px;
`;
