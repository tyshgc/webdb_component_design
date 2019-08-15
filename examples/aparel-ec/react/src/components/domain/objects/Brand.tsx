/**
 * 任意ブランド
 * Category Domain Object
 */
import React from "react";

// Types
import { typeBrand } from "../../../types/Brand";

interface Props {
  name?: typeBrand["name"];
}
export const Brand = (props: Props) => {
  const { name } = props;
  return <h1>{name || "ブランド名不明"}</h1>;
};
