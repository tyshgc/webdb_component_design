/**
 * 商品一覧画面
 * Productions Screen
 */
import React from "react";

// Components
import { ProductCollectionContainer } from "../containers";
import { ScreenWrapper } from "../gui/parts";

export const ProductsScreen = () => {
  return (
    <ScreenWrapper>
      <h1>商品</h1>
      <ProductCollectionContainer />
    </ScreenWrapper>
  );
};
