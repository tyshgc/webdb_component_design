/**
 * ブランドに関するReducer
 */
import { typeState, typeBrand } from "aparel-ec";

// 任意ブランドを指定する
export const selectBrandAction = (
  state: typeState,
  label: typeBrand["label"]
) => {
  if (!label || !state.brands || !state.products)
    return Object.assign({}, state);

  const brand = state.brands.find(brand => brand.label === label);

  const products = state.products.filter(product => {
    if (!product.brand) return false;
    return product.brand.label === label;
  });

  const newState = Object.assign({}, state, {
    selectProductsByBrand: {
      brand,
      products
    }
  });

  return newState;
};
