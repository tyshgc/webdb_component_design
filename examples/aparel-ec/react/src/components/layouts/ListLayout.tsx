/**
 * リスト用レイアウト
 * ListLayout Component
 */
import React from "react";

interface Props {
  children: React.ReactNode;
}
export const ListLayout = (props: Props) => {
  const { children } = props;
  return <>{children}</>;
};
