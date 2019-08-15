/**
 * カテゴリ詳細画面
 * CategoryDetail Screen
 */
import React from "react";

// Components
import { ProductsByCategoryContainer } from "../containers";

export const CategoryDetailScreen = (props: any) => {
  const label = props.match.params.label;

  return (
    <section>
      <h1>カテゴリ詳細</h1>
      <ProductsByCategoryContainer label={label} />
    </section>
  );
};
