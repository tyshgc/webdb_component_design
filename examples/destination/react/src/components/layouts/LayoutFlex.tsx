/**
 * Flexレイアウト用
 * LayoutFlex Component
 * ※誌面上ではStyledComponentを使用していませんが、このコード上では採用しています。
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

export const LayoutFlex = (props: Props) => {
  const { direction, justify, verticalAlign, height, children } = props;
  return (
    <StyledFlexBox {...{ direction, justify, verticalAlign, height }}>
      {children}
    </StyledFlexBox>
  );
};

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: ${(props: StyledProps) => props.direction || "row"};
  justify-content: ${(props: StyledProps) => props.justify || "space-between"};
  align-items: ${(props: StyledProps) => props.verticalAlign || "center"};

  ${(props: StyledProps) => {
    if (!props.height) return;
    return `height: ${props.height}`;
  }}
`;
