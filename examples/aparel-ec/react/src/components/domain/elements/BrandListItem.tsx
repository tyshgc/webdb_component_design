/**
 * ブランド一覧のリストアイテム
 * BrandListItem Domain Element
 *
 * @name ブランド名
 * @logo ブランドロゴイメージ
 * @onRefered 任意ブランド参照する際のイベント
 */
import React from "react";
import { Link } from "react-router-dom";

// Components
import { ListItemGroup } from "../../gui/groups";
import { BlockLayout } from "../../layouts";

// Constants
import { REFER_BRAND_LINK_LABEL } from "../../../constants";

// Types
import { typeBrand } from "../../../types/Brand";

interface Props {
  id?: typeBrand["id"];
  name?: typeBrand["name"];
  logo?: typeBrand["logoImage"];
  label?: typeBrand["label"];
}
export const BrandListItem = (props: Props) => {
  const { name, label, logo } = props;
  const hasMarginBottom = { bottom: true };
  const referLink = `/brand/${label}`;

  return (
    <ListItemGroup title={name} image={logo}>
      <BlockLayout hasMargin={hasMarginBottom}>
        <Link to={referLink}>{REFER_BRAND_LINK_LABEL}</Link>
      </BlockLayout>
    </ListItemGroup>
  );
};
