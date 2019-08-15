/**
 * カテゴリ一覧
 * Categories Domain Object
 * @categories カテゴリ
 */
import React from "react";

// Components
import { ListLayout, ListItemLayout } from "../../layouts";
import { CategoryListItem } from "../elements";

// Types
import { typeCategories, typeCategory } from "../../../types/Category";

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
        <ListItemLayout key={index}>
          <CategoryListItem {...{ name, label }} />
        </ListItemLayout>
      );
    });
  };

  return (
    <ListLayout>
      {CategoryList() || "カテゴリが登録されていません。"}
    </ListLayout>
  );
};
