import { typeProducts } from "./Product";

// カテゴリに関する型
export interface typeCategory {
  id: number; // カテゴリID
  label: string; // カテゴリラベル
  name: string; //カテゴリ名
  childCategories?: Array<typeCategory>; //子カテゴリ
}

export type typeCategories = Array<typeCategory>;

export interface typeProductsByCategory {
  category: typeCategory;
  products: typeProducts;
}
