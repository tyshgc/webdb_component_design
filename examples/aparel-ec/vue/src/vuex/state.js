// Mock
import { PRODUCTS_DATA, CATEGORIES_DATA, BRANDS_DATA } from "./mocks/";

// 商品に関するState
const computedProductTitle = productName => `${productName}`;
const computedProductPriceLabel = productPrice =>
  `${productPrice.toLocaleString()}`;
export const products = {
  state: PRODUCTS_DATA,
  getters: {
    productList: state => computedProductList(state)
  }
};

// 任意商品の詳細情報に関するState
export const selectProduct = {
  state: undefined
};

// カテゴリに関するState
export const categories = {
  state: CATEGORIES_DATA
};

// 任意カテゴリの詳細情報とそれに属する商品
export const selectProductsByCategory = {
  state: {
    category: undefined,
    products: undefined
  },
  getters: {
    productListByCategory: state => computedProductList(state.products)
  }
};

// ブランドに関するState
export const brands = {
  state: BRANDS_DATA
};

// 任意ブランドの詳細情報とそれに属する
export const selectProductsByBrand = {
  state: {
    brand: undefined,
    products: undefined
  },
  getters: {
    productListByBrand: state => computedProductList(state.products)
  }
};

function computedProductList(products) {
  if (!products) return [];

  return products.map(product => ({
    title: computedProductTitle(product.name),
    thumbnail: product.thumbnailImage,
    priceLabel: computedProductPriceLabel(product.price),
    brandName: product.brand.name
  }));
}
