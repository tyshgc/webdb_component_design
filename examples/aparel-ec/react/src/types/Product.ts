import { typeBrand } from "./Brand";
import { typeCategories } from "./Category";
import { typeSpecs } from "./Spec";
import { typeVariations } from "./Variation";

// 商品に関連する型
export interface typeProduct {
  id: number;
  name?: string;
  image?: string; //URL
  thumbnailImage?: string; //URL
  category?: typeCategories; // Category
  brand: typeBrand; // Brand
  valiation: typeVariations; //Valiation
  spec: typeSpecs; //Spec
  description: string;
  price: number;
}

export type typeComputedProductTitle = string;
export type typeComputedPriceLabel = string;

export interface typeProductListItem {
  title?: typeComputedProductTitle;
  thumbnail?: typeProduct["image"];
  priceLabel: typeComputedPriceLabel;
  brandName: typeBrand["name"];
}
export type typeProductList = Array<typeProductListItem>;

export type typeProducts = Array<typeProduct>;
