/**
 * リストアイテム用レイアウト
 * ListItemLayout Component
 * @column カラムの幅
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
  text-align: center;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
  padding-top: 16px;
  flex: 170px;
  max-width: 50%;

  ${(props: StyledProps) => {
    if (!props.column) return;
    return `flex: ${props.column}`;
  }};
`;
