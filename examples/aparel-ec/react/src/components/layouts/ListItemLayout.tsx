/**
 * リストアイテム用レイアウト
 * ListItemLayout Component
 */
import React from "react";

interface Props {
  children: React.ReactNode;
}
export const ListItemLayout = (props: Props) => {
  const { children } = props;
  return <li>{children}</li>;
};
