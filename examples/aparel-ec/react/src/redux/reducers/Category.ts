/**
 * カテゴリに関するReducer
 */
import { typeState, typeCategory } from "aparel-ec";

// 任意カテゴリを指定する
export const selectCategoryAction = (
  state: typeState,
  label: typeCategory["label"]
) => {
  if (!label || !state.categories || !state.products)
    return Object.assign({}, state);

  const category = state.categories.find(category => category.label === label);
  const products = state.products.filter(product => {
    if (!product.category) return false;

    const hasCategory = product.category.find(
      category => category.label === label
    );

    return hasCategory ? true : false;
  });

  const newState = Object.assign({}, state, {
    selectProductsByCategory: {
      category,
      products
    }
  });

  return newState;
};
