/**
 * ブランド一覧
 * Brands Domain Object
 * @brands ブランド
 */
import React from "react";

// Components
import { LayoutList, LayoutListItem } from "../../layouts";
import { BrandListItem } from "../elements";

// Types
import { typeBrands, typeBrand } from "aparel-ec";

interface Props {
  brands?: typeBrands;
}
export const Brands = (props: Props) => {
  const { brands } = props;

  const BrandList = () => {
    if (!brands) return;

    return brands.map((brand: typeBrand, index: number) => {
      const { id, name, label, logoImage } = brand;

      return (
        <LayoutListItem key={index}>
          <BrandListItem logo={logoImage} {...{ id, name, label }} />
        </LayoutListItem>
      );
    });
  };

  return (
    <LayoutList>{BrandList() || "ブランドが登録されていません。"}</LayoutList>
  );
};
