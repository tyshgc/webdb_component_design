/**
 * カテゴリ一覧のリストアイテム
 * BrandListItem Domain Element
 *
 * @name ブランド名
 * @logo ブランドロゴイメージ
 * @onRefered 任意ブランド参照する際のイベント
 */
import React from "react";
import { Link } from "react-router-dom";

// Types
import { typeCategory } from "../../../types/Category";

interface Props {
  label?: typeCategory["label"];
  name?: typeCategory["name"];
  children?: React.ReactNode;
}
export const CategoryListItem = (props: Props) => {
  const { label, name, children } = props;
  const referLink = `/category/${label}`;

  return (
    <>
      <div>
        <Link to={referLink}>{name}</Link>
      </div>
      <div>{children}</div>
    </>
  );
};
