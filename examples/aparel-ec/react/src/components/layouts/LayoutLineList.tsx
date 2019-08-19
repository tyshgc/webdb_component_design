/**
 * ラインリスト用レイアウト
 * LineListLayout Component
 */
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}
export const LayoutLineList = (props: Props) => {
  const { children } = props;
  return <StyledFlexUl>{children}</StyledFlexUl>;
};

const StyledFlexUl = styled.ul`
  margin: 0;
  padding: 0;
`;
