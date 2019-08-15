import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Switcher, OptionLabel } from "./components";

interface Props {
  heading?: string;
}
interface States {
  display: boolean;
}

export const DisplaySwitchFunc = (props: Props) => {
  const [states, onChangeDisplay] = useState<States>({ display: false });
  const { display } = states;
  const toggleEvent = () => onChangeDisplay({ display: !display });

  return (
    <>
      <StyledHeading>{props.heading}</StyledHeading>
      <OptionLabel text="表示" onClicked={toggleEvent} />
      <Switcher toggle={display} onChanged={toggleEvent} />
    </>
  );
};

const StyledHeading = styled.h1`
  font-size: 16px;
`;
