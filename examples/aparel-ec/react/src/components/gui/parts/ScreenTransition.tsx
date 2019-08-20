/**
 * ScreenTransition GUI Parts Component
 * @screenName 画面名
 */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  screenName?: string;
  screenLabel?: string;
  children?: React.ReactNode;
}
export const ScreenTransition = (props: Props) => {
  const { screenName, screenLabel, children } = props;
  if (!children && !screenLabel) return <></>;

  const to = `/${screenName}`;
  return <StyledLink to={to}>{children || screenLabel}</StyledLink>;
};

const StyledLink = styled(Link)`
  display: block;
  color: #000;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;
