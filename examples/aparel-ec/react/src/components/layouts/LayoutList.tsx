/**
 * リスト用レイアウト
 * ListLayout Component
 * @direction Flexの方向 {default: row}
 * @justify Flexの横方向の間隔 {default: space-between}
 * @verticalAlign Flexの縦方向の整列 {default: center}
 */
import React from "react";
import styled from "styled-components";
import {
  FlexDirectionProperty,
  BoxAlignProperty,
  JustifyContentProperty
} from "csstype";

interface StyledProps {
  direction?: FlexDirectionProperty;
  justify?: JustifyContentProperty;
  verticalAlign?: BoxAlignProperty;
}
interface Props extends StyledProps {
  children: React.ReactNode;
}
export const LayoutList = (props: Props) => {
  const { direction, justify, verticalAlign, children } = props;
  return (
    <StyledFlexUl {...{ direction, justify, verticalAlign }}>
      {children}
    </StyledFlexUl>
  );
};

const StyledFlexUl = styled.ul`
  display: flex;
  flex-direction: ${(props: StyledProps) => props.direction || "row"};
  justify-content: ${(props: StyledProps) => props.justify || "space-between"};
  align-items: ${(props: StyledProps) => props.verticalAlign || "center"};
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  background-repeat: repeat-y;
  background-position: 50% 0;
  background-image: url('data:image/svg+xml;utf8, 
  <svg width="1px" height="25px" viewBox="0 0 1 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="rgba(0,0,0,.1)" x="0" y="-1" width="1" height="27"></rect></svg>');
`;
