/**
 * 商品コレクションのコンテナ
 * ProductCollectionContainer
 */
import React from "react";
import { useSelector } from "react-redux";

// Redux
import { productsSelector } from "../../redux/selectors";

// Components
import { Products } from "../domain/objects";

export const ProductCollectionContainer = () => {
  const products = useSelector(productsSelector);

  return <Products products={products} />;
};
