/**
 * レイアウトの子要素用
 * Layout Component
 * @hasPadding paddingの有無[left,top,right,bttom]
 * @hasMargin marginの有無[left,top,right,bttom]
 * @children ラップする中身
 */
import React from "react";
import styled from "styled-components";

interface LeftTopRightBottom {
  left?: boolean;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
}
interface StyledProps {
  hasPadding?: LeftTopRightBottom;
  hasMargin?: LeftTopRightBottom;
}
interface Props extends StyledProps {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
  const { children, hasPadding, hasMargin } = props;
  return (
    <StyledWrapper hasPadding={hasPadding} hasMargin={hasMargin}>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ${(props: StyledProps) => {
    const hasMargin = props.hasMargin || {};
    const hasPadding = props.hasPadding || {};
    const getSpace = (bool?: boolean) => (bool ? `36px` : 0);

    return `
      margin-bottom: ${getSpace(
        typeof hasMargin.bottom === "boolean" ? hasMargin.bottom : true
      )};
      margin-top: ${getSpace(hasMargin.top)};
      margin-right: ${getSpace(hasMargin.right)};
      margin-left: ${getSpace(hasMargin.left)};

      padding-bottom: ${getSpace(hasPadding.bottom)};
      padding-top: ${getSpace(hasPadding.top)};
      padding-right: ${getSpace(hasPadding.right)};
      padding-left: ${getSpace(hasPadding.left)};
    `;
  }};
`;
