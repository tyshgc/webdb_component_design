/**
 * インラインラベル
 * @text ラベルにするテキスト
 */
import React from "react";

interface Props {
  text?: string;
}
export const InlineLabel = (props: Props) =>
  props.text ? <label>{props.text}</label> : null;
