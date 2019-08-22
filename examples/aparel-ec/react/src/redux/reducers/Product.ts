/**
 * 商品に関するReducer
 */
import { typeState, typeProduct } from "aparel-ec";

// 該当商品を探して参照する
export const selectProductAction = (
  state: typeState,
  id: typeProduct["id"]
) => {
  if (!id || !state.products) return Object.assign({}, state);

  const selectProduct = state.products.find(product => product.id === id);
  const newState = Object.assign({}, state, { selectProduct });

  return newState;
};
