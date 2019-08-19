/**
 * リストタイトル
 * ListTitle GUI Parts
 * @title タイトル
 */
import React from "react";
import styled from "styled-components";

interface Props {
  title?: string;
}
export const ListTitle = (props: Props) => {
  const { title } = props;
  return <StyledTitle>{title || "タイトル未設定"}</StyledTitle>;
};

const StyledTitle = styled.strong`
  font-size: 1.6em;
  font-weight: bold;
`;
