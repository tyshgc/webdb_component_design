/**
 * 商品のコンテナ
 * ProductContainer Component
 */
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { productSelector } from "../../redux/selectors";
import actions from "../../redux/actions";

interface Props {
  id: number | string;
}
export const ProductContainer = (props: Props) => {
  const dispatch = useDispatch();
  const { id } = props;

  const dataFetch = useMemo(() => {
    return () => {
      if (!id) return;
      const productID = typeof id === "number" ? id : Number(id);
      dispatch(actions.referProductDetailAction(productID));
    };
  }, [dispatch, id]);

  useEffect(() => dataFetch(), [id, dataFetch]);

  const product = useSelector(productSelector);
  return <>{product ? product.name : "該当の商品がみつかりませんでした…"}</>;
};
