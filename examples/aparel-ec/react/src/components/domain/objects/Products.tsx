/**
 * 商品一覧
 * Products Domain Object
 * @products 商品
 */
import React from "react";

// Components
import { ListLayout, ListItemLayout } from "../../layouts";
import { ProductListItem } from "../elements";

// Types
import { typeProductList, typeProductListItem } from "aparel-ec";

interface Props {
  products: typeProductList;
}
export const Products = (props: Props) => {
  const { products } = props;

  const ProductList = () =>
    products.map((product: typeProductListItem, index: number) => {
      const { title, brandName, priceLabel, thumbnail } = product;

      return (
        <ListItemLayout key={index}>
          <ProductListItem {...{ title, brandName, priceLabel, thumbnail }} />
        </ListItemLayout>
      );
    });

  return <ListLayout>{ProductList()}</ListLayout>;
};
