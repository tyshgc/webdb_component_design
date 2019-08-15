import React from "react";
import styled from "styled-components";
import { DisplaySwitchClass } from "./DisplaySwitchClass";
import { DisplaySwitchFunc } from "./DisplaySwitchFunc";

const App = () => {
  return (
    <StyledWrapper>
      <StyledBlock>
        <DisplaySwitchClass heading="クラスコンポーネント" />
      </StyledBlock>

      <StyledBlock>
        <DisplaySwitchFunc heading="関数コンポーネント" />
      </StyledBlock>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.main`
  padding: 24px 12px;
`;

const StyledBlock = styled.section`
  margin-bottom: 24px;
`;

export default App;
