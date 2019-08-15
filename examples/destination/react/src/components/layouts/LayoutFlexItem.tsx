/**
 * Flexレイアウトの子要素用
 * LayoutFlexItem Component
 * @column カラムの数
 * @children ラップする中身
 */

import React from "react";

interface Props {
  column?: number;
  children: React.ReactNode;
}
export const LayoutFlexItem = (props: Props) => <div>{props.children}</div>;
