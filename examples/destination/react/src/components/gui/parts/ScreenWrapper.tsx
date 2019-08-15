/**
 * ScreenWrapper Parts Component
 */
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

export const ScreenWrapper = (props: Props) => {
  const { children, pageTitle } = props;
  return (
    <>
      <header>
        <>Ξ</>
        <>{PageTitle(pageTitle)}</>
      </header>
      <main>{children}</main>
    </>
  );
};

const PageTitle = (title?: string) => {
  if (!title) return;
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled.h1``;
