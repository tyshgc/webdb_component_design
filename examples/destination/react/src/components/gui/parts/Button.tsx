/**
 * ボタン
 * Button GUI parts Component
 * @label ボタンのラベル
 * @onPushed ボタン押下時のイベント
 */
import React from "react";
import styled from "styled-components";

interface Props {
  label?: string;
  onPushed?: (res: React.BaseSyntheticEvent) => void;
}
export const Button = (props: Props) => {
  const { label, onPushed } = props;
  return <StyledButton onClick={onPushed}>{label || "OK"}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #000;
  border: none;
  border-radius: 999px;
  color: #fff;
  font-size: 1.1em;
  min-width: 200px;
  padding: 9px 24px 8px;
  text-align: center;
`;
