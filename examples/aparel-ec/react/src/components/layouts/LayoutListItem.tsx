/**
 * リストアイテム用レイアウト
 * ListItemLayout Component
 */
import React from "react";
import styled from "styled-components";

interface StyledProps {
  column?: number | string;
}
interface Props extends StyledProps {
  children: React.ReactNode;
}
export const LayoutListItem = (props: Props) => {
  const { column, children } = props;
  return <StyledListItem column={column}>{children}</StyledListItem>;
};

const StyledListItem = styled.li`
  list-style-type: none;

  ${(props: StyledProps) => {
    if (!props.column) return;
    return `flex: ${props.column}`;
  }}
`;
