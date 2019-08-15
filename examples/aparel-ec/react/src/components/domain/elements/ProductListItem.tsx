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
import { BlockLayout } from "../../layouts";

// Types
import { typeBrand } from "../../../types/Brand";
import {
  typeProduct,
  typeComputedPriceLabel,
  typeComputedProductTitle
} from "../../../types/Product";

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
      <BlockLayout hasMargin={hasMarginBottom}>
        <StyledPrice>
          <i>¥</i>
          <strong>{priceLabel}</strong>
        </StyledPrice>
      </BlockLayout>
      <BlockLayout hasMargin={hasMarginBottom}>
        <StyledBrandName>
          <span>ブランド </span>
          <strong>{brandName}</strong>
        </StyledBrandName>
      </BlockLayout>
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
