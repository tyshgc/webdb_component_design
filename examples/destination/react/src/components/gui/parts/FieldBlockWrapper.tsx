/**
 * 見出し付きのフィールドブロック
 * FieldBlockWrapper GUI Parts Component
 */
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  heading?: string;
}
export const FieldBlockWrapper = (props: Props) => {
  const { heading, children } = props;
  if (!heading) return <></>;

  return (
    <StyledWrapper>
      <StyledHeading>{heading}</StyledHeading>
      <div>{children}</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section``;
const StyledHeading = styled.h1``;
