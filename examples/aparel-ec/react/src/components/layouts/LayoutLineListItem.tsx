/**
 * ラインリストアイテム用レイアウト
 * ListLineItemLayout Component
 */
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}
export const LayoutLineListItem = (props: Props) => {
  const { children } = props;
  return <StyledListItem>{children}</StyledListItem>;
};

const StyledListItem = styled.li`
  list-style-type: none;
  padding: 24px 1.2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
