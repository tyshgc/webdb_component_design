/**
 * ScreenWrapper GUI Parts Component
 */
import React from "react";
import styled from "styled-components";

// Components
import { Layout } from "../../layouts";

// Constants
const LAYOUT_OPTION = {
  MARGIN: {},
  PADDING: { left: true, right: true }
};

interface Props {
  children: React.ReactNode;
}

export const ScreenWrapper = (props: Props) => {
  const { children } = props;

  return (
    <StyledMain>
      <Layout
        hasMargin={LAYOUT_OPTION.MARGIN}
        hasPadding={LAYOUT_OPTION.PADDING}
      >
        {children}
      </Layout>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  overflow: hidden;
  padding-top: 32px;
`;
