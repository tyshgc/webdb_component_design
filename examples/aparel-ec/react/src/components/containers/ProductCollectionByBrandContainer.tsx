/**
 * ブランド毎の商品一覧のコンテナ
 * CategorieCollectionContainer Component
 */
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import { Brand, Products } from "../domain/objects";

// Redux
import { productsByBrandSelector } from "../../redux/selectors";
import actions from "../../redux/actions";

interface Props {
  label: string;
}
export const ProductCollectionByBrandContainer = (props: Props) => {
  const dispatch = useDispatch();
  const { label } = props;

  const dataFetch = useMemo(() => {
    return () => {
      if (!label) return;
      dispatch(actions.referProductsByBrandAction(label));
    };
  }, [dispatch, label]);

  useEffect(() => dataFetch(), [label, dataFetch]);

  const productsByBrand = useSelector(productsByBrandSelector);
  if (!productsByBrand.products) return <></>;

  const { name } = productsByBrand.brand;

  return (
    <>
      <Brand name={name} />
      <Products products={productsByBrand.products} />
    </>
  );
};
