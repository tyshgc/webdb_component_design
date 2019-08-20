/**
 * ブランド一覧のコンテナ
 * BrandCollectionContainer Component
 */
import React from "react";
import { useSelector } from "react-redux";

// Components
import { Brands } from "../domain/objects";

// Redux
import { brandsSelector } from "../../redux/selectors";

export const BrandCollectionContainer = () => {
  const brands = useSelector(brandsSelector);

  return (
    <>
      <h1>ブランド</h1>
      <Brands brands={brands} />
    </>
  );
};
