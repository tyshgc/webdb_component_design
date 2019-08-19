/**
 * ブランド詳細画面
 * BrandDetail Screen
 */
import React from "react";

// Components
import { ProductsByBrandContainer } from "../containers";
import { ScreenWrapper } from "../gui/parts";

export const BrandDetailScreen = (props: any) => {
  const label = props.match.params.label;

  return (
    <ScreenWrapper>
      <h1>カテゴリ詳細</h1>
      <ProductsByBrandContainer label={label} />
    </ScreenWrapper>
  );
};
