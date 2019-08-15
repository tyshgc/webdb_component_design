/**
 * テキストフィールド
 * TextField GUI Component
 * @defaultValue 初期に表示する値
 * @placeholder プレイスホルダーに表示するテキスト
 * @onChanged 入力変更時のイベント
 */
import React from "react";
import styled from "styled-components";

interface Props {
  defaultValue?: string;
  placeholder?: string;
  onChanged?: (res: React.BaseSyntheticEvent) => void;
}

export const TextField = (props: Props) => {
  const { defaultValue, placeholder, onChanged } = props;

  return (
    <StyledFiled
      placeholder={placeholder || "入力してください…"}
      defaultValue={defaultValue}
      onChange={onChanged}
    />
  );
};

// input要素をTextFiled用のスタイルとしてラップ
const StyledFiled = styled.input`
  border: 1px solid #676767;
  border-radius: 6px;
  font-size: 1.4em;
  outline: none;
  padding: 10px 8px 8px;
`;
