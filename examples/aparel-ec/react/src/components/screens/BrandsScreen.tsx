/**
 * ブランド一覧画面
 * Brands Screen
 */
import React from "react";

// Components
import { BrandsContainer } from "../containers";
import { ScreenWrapper } from "../gui/parts";

export const BrandsScreen = () => {
  return (
    <ScreenWrapper>
      <h1>ブランド一覧</h1>
      <BrandsContainer />
    </ScreenWrapper>
  );
};
