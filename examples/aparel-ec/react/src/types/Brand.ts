import { typeProducts } from "./Product";

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
