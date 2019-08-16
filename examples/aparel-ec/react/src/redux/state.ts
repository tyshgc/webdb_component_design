/**
 * アプリケーションの状態
 */
// Mock
import { PRODUCTS_DATA, CATEGORIES_DATA, BRANDS_DATA } from "./mocks/";

// Types
import { typeState } from "aparel-ec";

export const initialState: typeState = {
  products: PRODUCTS_DATA,
  categories: CATEGORIES_DATA,
  brands: BRANDS_DATA,
  selectProduct: undefined,
  selectProductsByCategory: undefined,
  selectProductsByBrand: undefined
};
