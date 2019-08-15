/**
 * ブランド詳細画面
 * BrandDetail Screen
 */
import React from "react";

// Components
import { ProductsByBrandContainer } from "../containers";

export const BrandDetailScreen = (props: any) => {
  const label = props.match.params.label;

  return (
    <section>
      <h1>カテゴリ詳細</h1>
      <ProductsByBrandContainer label={label} />
    </section>
  );
};
