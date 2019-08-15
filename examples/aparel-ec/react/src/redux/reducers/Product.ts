/**
 * 商品に関するReducer
 */
import { typeState } from "../../types/State";
import { typeProduct } from "../../types/Product";

// 該当商品を探して参照する
export const findProductAction = (state: typeState, id: typeProduct["id"]) => {
  if (!id || !state.products) return Object.assign({}, state);

  const selectProduct = state.products.find(product => product.id === id);
  const newState = Object.assign({}, state, { selectProduct });

  return newState;
};

// 参照している該当商品をリセットする
export const resetProductAction = (state: typeState) => {
  if (!state.products) return Object.assign({}, state);
  const selectProduct = undefined;
  const resetState = Object.assign({}, state, { selectProduct });

  return resetState;
};
