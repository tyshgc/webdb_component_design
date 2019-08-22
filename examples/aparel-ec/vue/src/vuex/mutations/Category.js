export const selectCategoryMutation = (state, payload) => {
  const label = payload;

  if (!label || !state.categories || !state.products) return;

  const category = state.categories.find(category => category.label === label);
  const products = state.products.filter(product => {
    if (!product.category) return false;

    const hasCategory = product.category.find(
      category => category.label === label
    );

    return hasCategory ? true : false;
  });

  state.selectProductsByCategory = {
    category,
    products
  };
};
