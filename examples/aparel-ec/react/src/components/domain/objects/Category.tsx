/**
 * 任意カテゴリ
 * Category Domain Object
 */
import React from "react";

// Types
import { typeCategory } from "../../../types/Category";

interface Props {
  name?: typeCategory["name"];
}
export const Category = (props: Props) => {
  const { name } = props;
  return <h1>{name || "カテゴリ名不明"}</h1>;
};
