import { createSelector } from "reselect";

// Types
import { typeState, typeProduct, typeProducts } from "aparel-ec";

//商品一覧に関するSelector
const computedProductTitle = (productName: typeProduct["name"]) =>
  `${productName}`;
const computedProductPriceLabel = (productPrice: typeProduct["price"]) =>
  `${productPrice.toLocaleString()}`;

const createProductList = (productsAll: typeProducts) => {
  return productsAll.map((productAll: typeProduct) => ({
    title: computedProductTitle(productAll.name),
    thumbnail: productAll.thumbnailImage,
    priceLabel: computedProductPriceLabel(productAll.price),
    brandName: productAll.brand.name
  }));
};

// 商品一覧
const productsAllSelector = (state: typeState) => state.products;

export const productsSelector = createSelector(
  [productsAllSelector],
  (productsAll: typeState["products"]) => {
    if (!productsAll) return [];
    return createProductList(productsAll);
  }
);

//  カテゴリ毎の商品一覧
const productsAllByCategorySelector = (state: typeState) =>
  state.selectProductsByCategory;

export const productsByCategorySelector = createSelector(
  [productsAllByCategorySelector],
  (selectProductsByCategory: typeState["selectProductsByCategory"]) => {
    if (!selectProductsByCategory) return {};

    const { category, products } = selectProductsByCategory;
    const productList = createProductList(products);

    return {
      category,
      products: productList
    };
  }
);

// ブランド毎の商品一覧
const productsAllByBrandSelector = (state: typeState) =>
  state.selectProductsByBrand;

export const productsByBrandSelector = createSelector(
  [productsAllByBrandSelector],
  (selectProductsByBrand: typeState["selectProductsByBrand"]) => {
    if (!selectProductsByBrand) return {};
    const { brand, products } = selectProductsByBrand;
    const productList = createProductList(products);

    return {
      brand,
      products: productList
    };
  }
);

// 商品に関するSelector
export const productSelector = (state: typeState) => {
  if (!state.selectProduct) return;
  return state.selectProduct;
};

// カテゴリ一覧に関するSelector
export const categoriesSelector = (state: typeState) => {
  if (!state.categories) return;
  return state.categories;
};

// ブランド一覧に関するSelector
export const brandsSelector = (state: typeState) => {
  if (!state.brands) return;
  return state.brands;
};
