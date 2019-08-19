/**
 * カテゴリ一覧
 * Categories Domain Object
 * @categories カテゴリ
 */
import React from "react";

// Components
import { LayoutLineList, LayoutLineListItem } from "../../layouts";
import { CategoryListItem } from "../elements";

// Types
import { typeCategories, typeCategory } from "aparel-ec";

interface Props {
  categories?: typeCategories;
}
export const Categories = (props: Props) => {
  const { categories } = props;

  const CategoryList = () => {
    if (!categories) return;

    return categories.map((category: typeCategory, index: number) => {
      const { name, label } = category; //, childCategories

      return (
        <LayoutLineListItem key={index}>
          <CategoryListItem {...{ name, label }} />
        </LayoutLineListItem>
      );
    });
  };

  return (
    <LayoutLineList>
      {CategoryList() || "カテゴリが登録されていません。"}
    </LayoutLineList>
  );
};
