/**
 * 商品詳細画面
 * ProductionDetail Screen
 */
import React from "react";

// Components
import { ProductContainer } from "../containers";
import { ScreenWrapper } from "../gui/parts";

export const ProductDetailScreen = (props: any) => {
  const id = props.match.params.id;

  return (
    <ScreenWrapper>
      <h1>商品詳細</h1>
      <ProductContainer id={id} />
    </ScreenWrapper>
  );
};
