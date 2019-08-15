/**
 * セレクトボックス
 * SelectBox GUI Parts Component
 * @choice 選択肢
 */
import React from "react";
import styled from "styled-components";

interface Props {
  choices?: Array<string>;
  selected?: string;
  onSelected?: (res: React.BaseSyntheticEvent) => void;
}

export const SelectBox = (props: Props) => {
  const { choices, selected, onSelected } = props;
  return (
    <>
      <StyledSelectBox
        defaultValue={selected || "DEFAULT"}
        onChange={onSelected}
      >
        <option key={0} value="DEFAULT" disabled>
          選択してください
        </option>
        {SelectBoxItem(choices)}
      </StyledSelectBox>
    </>
  );
};

const SelectBoxItem = (choices?: Array<string>) => {
  if (!choices) return;
  return choices.map((choice, index) => {
    return (
      <option key={index} value={choice}>
        {choice}
      </option>
    );
  });
};

const StyledSelectBox = styled.select``;
