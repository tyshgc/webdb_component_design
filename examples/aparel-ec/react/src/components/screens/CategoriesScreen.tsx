/**
 * カテゴリ一覧画面
 * Categories Screen
 */
import React from "react";

// Components
import { CategoriesContainer } from "../containers";
import { ScreenWrapper } from "../gui/parts";

export const CategoriesScreen = () => {
  return (
    <ScreenWrapper>
      <h1>カテゴリ一覧</h1>
      <CategoriesContainer />
    </ScreenWrapper>
  );
};
