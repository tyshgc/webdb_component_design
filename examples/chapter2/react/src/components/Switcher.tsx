import React from "react";
import styled from "styled-components";

interface Props {
  toggle?: boolean;
  onChanged?: () => void;
}
export const Switcher = (props: Props) => {
  const { toggle, onChanged } = props;
  const isActive = toggle || false;

  return (
    <StyledSwitchWrapper isActive={isActive} onClick={onChanged}>
      <StyledToggleCursor />
    </StyledSwitchWrapper>
  );
};

const StyledSwitchWrapper = styled.button`
  display: inline-block;
  border: 2px solid #000;
  border-radius: 999px;
  min-width: 70px;
  padding: 0;
  outline: none;

  ${(props: { isActive: boolean }) => `
      background-color: ${props.isActive ? `rgba(0,0,0,.3)` : `transparent`};
      text-align: ${props.isActive ? `right` : `left`}; 
    `}

  margin-left: 12px;
`;
const StyledToggleCursor = styled.i`
  display: inline-block;
  border-radius: 999px;
  width: 30px;
  height: 30px;
  background-color: #000;
  position: relative;
  top: 1px;
  margin: 1px 1.5px 0 1.5px;
`;
