/**
 * 商品詳細画面
 * ProductionDetail Screen
 */
import React from "react";

// Components
import { ProductContainer } from "../containers";

export const ProductDetailScreen = (props: any) => {
  const id = props.match.params.id;

  return (
    <section>
      <i>商品詳細</i>
      <ProductContainer id={id} />
    </section>
  );
};
