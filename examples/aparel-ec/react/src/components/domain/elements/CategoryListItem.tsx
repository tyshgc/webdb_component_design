/**
 * カテゴリ一覧のリストアイテム
 * BrandListItem Domain Element
 *
 * @name ブランド名
 * @logo ブランドロゴイメージ
 * @onRefered 任意ブランド参照する際のイベント
 */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Types
import { typeCategory } from "aparel-ec";

// Components
import { ListTitle } from "../../gui/parts";

interface Props {
  label?: typeCategory["label"];
  name?: typeCategory["name"];
  children?: React.ReactNode;
}
export const CategoryListItem = (props: Props) => {
  const { label, name } = props;
  const referLink = `/category/${label}`;

  return (
    <StyledLink to={referLink}>
      <ListTitle title={name} />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: block;
  color: #000;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;
