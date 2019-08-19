/**
 * 商品一覧
 * Products Domain Object
 * @products 商品
 */
import React from "react";

// Components
import { LayoutList, LayoutListItem } from "../../layouts";
import { ProductListItem } from "../elements";
import { NotFoundMessage } from "../../gui/parts";

// Types
import { typeProductList, typeProductListItem } from "aparel-ec";

interface Props {
  products: typeProductList;
}
export const Products = (props: Props) => {
  const { products } = props;

  const ProductListItems = products.map(
    (product: typeProductListItem, index: number) => {
      const { title, brandName, priceLabel, thumbnail } = product;

      return (
        <LayoutListItem key={index}>
          <ProductListItem {...{ title, brandName, priceLabel, thumbnail }} />
        </LayoutListItem>
      );
    }
  );

  const ProductList = () => {
    if (products.length === 0) return;
    return <LayoutList>{ProductListItems}</LayoutList>;
  };

  const ProductNone = () => {
    if (products.length > 0) return;
    return <NotFoundMessage />;
  };

  return (
    <LayoutList>
      <>{ProductList()}</>
      <>{ProductNone()}</>
    </LayoutList>
  );
};
