/**
 * ScreenWrapper Parts Component
 */
import React from "react";
import styled from "styled-components";

// Components
import { LayoutFlex, LayoutFlexItem } from "../../layouts";

// Svg
import HamburgerMenu from "../../../assets/svg/HamburgerMenu";

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

export const ScreenWrapper = (props: Props) => {
  const { children, pageTitle } = props;
  return (
    <>
      <StyledNavBar>
        <LayoutFlex>
          <LayoutFlexItem column={"80px"}>{DrawerTrigger()}</LayoutFlexItem>
          <LayoutFlexItem column={"100%"}>
            {PageTitle(pageTitle)}
          </LayoutFlexItem>
          <LayoutFlexItem column={"80px"}>{OptionMenu()}</LayoutFlexItem>
        </LayoutFlex>
      </StyledNavBar>
      <main>{children}</main>
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

const StyledNavBar = styled.header`
  background: #c1c1c1;
  height: 72px;
  padding-top: 12px;
`;
const StyledLeft = styled.div`
  text-align: center;
`;
const StyledTitle = styled.h1`
  text-align: center;
  font-size: 24px;
`;
