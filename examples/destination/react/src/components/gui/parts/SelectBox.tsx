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
    <StyledSelectBox defaultValue={selected || "DEFAULT"} onChange={onSelected}>
      <option key={0} value="DEFAULT" disabled>
        選択してください
      </option>
      {SelectBoxItem(choices)}
    </StyledSelectBox>
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

const StyledSelectBox = styled.select`
  // reset styles
  outline: none;
  text-indent: 0.01px;
  text-overflow: "";
  background: none transparent;
  vertical-align: middle;
  color: inherit;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;

  font-size: 1.2em;
  border-radius: 6px;
  padding: 12px 12px 12px;
  width: 80%;
  background-image: url('data:image/svg+xml;utf8,
  <svg width="14px" height="12px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.34818681,3.48815406 C9.70254203,3.13379883 10.2770654,3.13379883 10.6314206,3.48815406 C10.9857758,3.84250928 10.9857758,4.41703261 10.6314206,4.77138783 L10.6314206,4.77138783 L6.78171927,8.62108915 C6.5683358,8.83447262 6.27511641,8.91936213 5.99821133,8.87575768 C5.72207059,8.91936213 5.4288512,8.83447262 5.21546773,8.62108915 L1.36576642,4.77138783 C1.01141119,4.41703261 1.01141119,3.84250928 1.36576642,3.48815406 C1.72012164,3.13379883 2.29464497,3.13379883 2.64900019,3.48815406 L5.998,6.83738764 Z" id="select-box-down-arrow-dark"></path></svg>');
  background-repeat: no-repeat;
  background-position: 90% 50%;
`;
