/**
 * ScreenWrapper Parts Component
 */
import React from "react";
import styled from "styled-components";

// Components
import { Layout, LayoutFlex, LayoutFlexItem } from "../../layouts";

// Svg
import HamburgerMenu from "../../../assets/svg/HamburgerMenu";

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

export const ScreenWrapper = (props: Props) => {
  const { children, pageTitle } = props;
  const layoutOption = {
    margin: {},
    padding: { left: true, right: true }
  };
  return (
    <>
      <StyledNavBar>
        <LayoutFlex height="100%">
          <LayoutFlexItem column={"80px"}>{DrawerTrigger()}</LayoutFlexItem>
          <LayoutFlexItem column={"100%"}>
            {PageTitle(pageTitle)}
          </LayoutFlexItem>
          <LayoutFlexItem column={"80px"}>{OptionMenu()}</LayoutFlexItem>
        </LayoutFlex>
      </StyledNavBar>
      <StyledMain>
        <Layout
          hasMargin={layoutOption.margin}
          hasPadding={layoutOption.padding}
        >
          {children}
        </Layout>
      </StyledMain>
    </>
  );
};

const OptionMenu = () => {
  return <></>;
};
const DrawerTrigger = () => {
  // todo: drawerのトリガーとBackNav入れたりできるようにする
  const onDummy = () => alert(`サンプルなのでドロワーはうごきません…`);
  return (
    <StyledLeft onClick={onDummy}>
      <HamburgerMenu />
    </StyledLeft>
  );
};
const PageTitle = (title?: string) => {
  if (!title) return;
  return <StyledTitle>{title}</StyledTitle>;
};

const NAV_BAR_HEIGHT = 72;

const StyledMain = styled.main`
  overflow: hidden;
  position: relative;
  top: ${NAV_BAR_HEIGHT}px;
`;

const StyledNavBar = styled.header`
  background: #c1c1c1;
  height: ${NAV_BAR_HEIGHT}px;
  padding-top: 12px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;
const StyledLeft = styled.div`
  text-align: center;
`;
const StyledTitle = styled.h1`
  text-align: center;
  font-size: 1.4em;
  margin: 0;
  padding: 0;
`;
