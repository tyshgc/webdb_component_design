/**
 * Flexレイアウト用
 * LayoutFlex Component
 * ※誌面上ではStyledComponentを使用していませんが、このコード上では採用しています。
 */
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const LayoutFlex = (props: Props) => <div>{props.children}</div>;
