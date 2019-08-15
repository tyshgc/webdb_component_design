/**
 * カテゴリ一覧のコンテナ
 * CategoriesContainer Component
 */
import React from "react";
import { useSelector } from "react-redux";

// Components
import { Categories } from "../domain/objects";

// Redux
import { categoriesSelector } from "../../redux/selectors";

export const CategoriesContainer = () => {
  const categories = useSelector(categoriesSelector);

  return (
    <>
      <h1>カテゴリ</h1>
      <Categories categories={categories} />
    </>
  );
};
