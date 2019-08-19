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

  return (
    <ListItemGroup title={title} image={thumbnail}>
      <Layout hasMargin={{ bottom: false }}>
        <StyledPrice>
          <Price value={priceLabel} />
        </StyledPrice>
      </Layout>
      <Layout hasMargin={hasMarginBottom}>
        <StyledBrandName>
          <span>ブランド </span>
          <strong>{brandName}</strong>
        </StyledBrandName>
      </Layout>
    </ListItemGroup>
  );
};

const StyledPrice = styled.div`
  & > i {
  }
  & > strong {
  }
`;
const StyledBrandName = styled.div`
  & > span {
  }
  & > strong {
  }
`;
