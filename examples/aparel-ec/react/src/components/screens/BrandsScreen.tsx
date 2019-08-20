/**
 * ブランド一覧画面
 * Brands Screen
 */
import React from "react";

// Components
import { BrandCollectionContainer } from "../containers";
import { ScreenWrapper } from "../gui/parts";

export const BrandsScreen = () => {
  return (
    <ScreenWrapper>
      <h1>ブランド一覧</h1>
      <BrandCollectionContainer />
    </ScreenWrapper>
  );
};
