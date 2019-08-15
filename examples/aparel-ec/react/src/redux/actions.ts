/**
 * Redux Actions
 */
import actionCreatorFactory from "typescript-fsa";
import { ACTION_TYPES } from "./actionTypes";

// Types
import { typeProduct } from "../types/Product";
import { typeCategory } from "../types/Category";
import { typeBrand } from "../types/Brand";

const actionCreator = actionCreatorFactory("aparel-ec");

// 該当商品の詳細情報を参照する
const referProductDetailAction = actionCreator<typeProduct["id"]>(
  ACTION_TYPES.FIND_PRODUCTION
);

// 該当カテゴリの詳細情報を参照する
const referProductsByCategoryAction = actionCreator<typeCategory["label"]>(
  ACTION_TYPES.FIND_CATEGORY
);

// 該当ブランドの詳細情報を参照する
const referProductsByBrandAction = actionCreator<typeBrand["label"]>(
  ACTION_TYPES.FIND_BRAND
);

export default {
  referProductDetailAction,
  referProductsByCategoryAction,
  referProductsByBrandAction
};
