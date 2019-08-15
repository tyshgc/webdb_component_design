import { typeBrands, typeProductsByBrand } from "./Brand";
import { typeCategories, typeProductsByCategory } from "./Category";
import { typeProduct, typeProducts } from "./Product";

// アプリケーションの状態に関する型
export interface typeState {
  products?: typeProducts;
  categories: typeCategories;
  brands: typeBrands;
  selectProduct?: typeProduct;
  selectProductsByCategory?: typeProductsByCategory;
  selectProductsByBrand?: typeProductsByBrand;
}
