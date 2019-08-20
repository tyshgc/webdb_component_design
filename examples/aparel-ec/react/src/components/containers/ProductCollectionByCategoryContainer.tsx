/**
 * カテゴリ毎の商品一覧のコンテナ
 * ProductCollectionByBrandContainer Component
 */
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import { Category, Products } from "../domain/objects";

// Redux
import { productsByCategorySelector } from "../../redux/selectors";
import actions from "../../redux/actions";

interface Props {
  label: string;
}
export const ProductCollectionByCategoryContainer = (props: Props) => {
  const dispatch = useDispatch();
  const { label } = props;

  const dataFetch = useMemo(() => {
    return () => {
      if (!label) return;
      dispatch(actions.referProductsByCategoryAction(label));
    };
  }, [dispatch, label]);

  useEffect(() => dataFetch(), [label, dataFetch]);

  const productByCategory = useSelector(productsByCategorySelector);
  if (!productByCategory.products) return <></>;
  const { name } = productByCategory.category;

  return (
    <section>
      <Category name={name} />
      <Products products={productByCategory.products} />
    </section>
  );
};
