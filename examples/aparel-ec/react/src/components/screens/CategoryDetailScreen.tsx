/**
 * カテゴリ詳細画面
 * CategoryDetail Screen
 */
import React from "react";

// Components
import { ProductCollectionByCategoryContainer } from "../containers";
import { ScreenWrapper } from "../gui/parts";

export const CategoryDetailScreen = (props: any) => {
  const label = props.match.params.label;

  return (
    <ScreenWrapper>
      <h1>カテゴリ詳細</h1>
      <ProductCollectionByCategoryContainer label={label} />
    </ScreenWrapper>
  );
};
