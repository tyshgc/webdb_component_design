declare module "aparel-ec" {
  // 寸法に関する型
  export interface typeSpec {
    label: string;
    info: number | string;
  }

  export type typeSpecs = Array<typeSpec>;

  // SKUに関する型
  export interface typeSKU {
    id: number;
    stock: number;
  }

  // バリエーションに関する型
  export interface typeVariation {
    id: number; // バリエーションID
    name: string; //バリエーション名
    sku: typeSKU; //在庫情報
  }

  export type typeVariations = Array<typeVariation> | undefined;

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

  // ブランドに関する型
  export interface typeBrand {
    id: number; // ブランドID
    name: string; //ブランド名
    label: string;
    logoImage?: string; //ImageURL
    image?: string; //ImageURL
  }

  export type typeBrandReferedEvent = (id: typeBrand["id"]) => void;

  export type typeBrands = Array<typeBrand>;

  export interface typeProductsByBrand {
    brand: typeBrand;
    products: typeProducts;
  }

  // アプリケーションの状態に関する型
  export interface typeState {
    products?: typeProducts;
    categories: typeCategories;
    brands: typeBrands;
    selectProduct?: typeProduct;
    selectProductsByCategory?: typeProductsByCategory;
    selectProductsByBrand?: typeProductsByBrand;
  }
}
