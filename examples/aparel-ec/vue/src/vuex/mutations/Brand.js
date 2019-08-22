export const selectBrandMutation = (state, payload) => {
  const label = payload;

  if (!label || !state.brands || !state.products) return;

  const brand = state.brands.find(brand => brand.label === label);
  const products = state.products.filter(product => {
    if (!product.brand) return false;
    return product.brand.label === label;
  });

  state.selectProductsByBrand = {
    brand,
    products
  };
};
