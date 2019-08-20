/**
 * 値段の表示
 * Price GUI Parts Component
 * @value 値段
 */
import React from "react";
import styled from "styled-components";

interface Props {
  value?: String | Number;
}
export const Price = (props: Props) => {
  const { value } = props;
  if (!value) return <></>;

  return (
    <>
      <StyledPrefiex>¥</StyledPrefiex>
      <StyledValue>{value}</StyledValue>
    </>
  );
};

const StyledPrefiex = styled.i`
  font-size: 1em;
  font-weight: bold;
  font-style: normal;
`;
const StyledValue = styled.strong`
  font-size: 2em;
  font-weigt: bold;
`;
