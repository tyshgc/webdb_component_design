/**
 * 商品一覧のリストアイテム
 * ProductListItem Domain Element
 *
 * @title 商品のタイトル
 * @thumbnail 商品のサムネイル画像
 * @priceLabel 商品のプライスラベル
 * @brandName 商品のブランド名
 * @onRefered 任意商品参照する際のイベント
 */
import React from "react";
import styled from "styled-components";

// Components
import { ListItemGroup } from "../../gui/groups";
import { Price } from "../../gui/parts";
import { Layout } from "../../layouts";

// Types
import {
  typeBrand,
  typeProduct,
  typeComputedPriceLabel,
  typeComputedProductTitle
} from "aparel-ec";

interface Props {
  brandName?: typeBrand["name"];
  priceLabel?: typeComputedPriceLabel;
  title?: typeComputedProductTitle;
  thumbnail?: typeProduct["thumbnailImage"];
}
export const ProductListItem = (props: Props) => {
  const { title, thumbnail, priceLabel, brandName } = props;
  const hasMarginBottom = { bottom: true };
  const noneMarginBottom = { bottom: true };

  return (
    <ListItemGroup title={title} image={thumbnail}>
      <Layout hasMargin={noneMarginBottom}>
        <Price value={priceLabel} />
      </Layout>
      <Layout hasMargin={hasMarginBottom}>
        <StyledBrandLabel>ブランド </StyledBrandLabel>
        <StyledBrandName>{brandName}</StyledBrandName>
      </Layout>
    </ListItemGroup>
  );
};

const StyledBrandLabel = styled.span`
  font-size: 0.8em;
  color: #666;
`;
const StyledBrandName = styled.strong`
  font-size: 1em;
  font-weight: bold;
`;
