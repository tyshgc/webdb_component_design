/**
 * リスト用レイアウト
 * ListLayout Component
 */
import React from "react";
import styled from "styled-components";
import {
  FlexDirectionProperty,
  BoxAlignProperty,
  JustifyContentProperty
} from "csstype";

interface StyledProps {
  height?: String | number;
  direction?: FlexDirectionProperty;
  justify?: JustifyContentProperty;
  verticalAlign?: BoxAlignProperty;
}
interface Props extends StyledProps {
  children: React.ReactNode;
}
export const LayoutList = (props: Props) => {
  const { children } = props;
  return <StyledFlexUl>{children}</StyledFlexUl>;
};

const StyledFlexUl = styled.ul`
  display: flex;
  flex-direction: ${(props: StyledProps) => props.direction || "row"};
  justify-content: ${(props: StyledProps) => props.justify || "space-between"};
  align-items: ${(props: StyledProps) => props.verticalAlign || "center"};
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;
