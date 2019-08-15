/**
 * ブランド一覧のコンテナ
 * BrandsContainer Component
 */
import React from "react";
import { useSelector } from "react-redux";

// Components
import { Brands } from "../domain/objects";

// Redux
import { brandsSelector } from "../../redux/selectors";

export const BrandsContainer = () => {
  const brands = useSelector(brandsSelector);

  return (
    <>
      <h1>ブランド</h1>
      <Brands brands={brands} />
    </>
  );
};
