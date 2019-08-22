<template>
  <list-item-group :title="title" :image="thumbnail">
      <layout :has-margin="noneMarginBottom">
        <price :value="priceLabel" />
      </layout>
      <layout :hasMargin="hasMarginBottom">
        <styled-brand-label>ブランド </styled-brand-label>
        <styled-brand-name>{{brandName}}</styled-brand-name>
      </layout>
    </list-item-group>
</template>

<script>
/**
 * 商品一覧のアイテム
 * ProductListItem GUI Parts Component
 * @title リストのタイトル（商品名）
 * @thumbnail サムネイル（商品サムネイル画像）
 * @priceLabel 価格（商品の価格）
 * @brandName 商品のブランド
 */
import styled from "vue-styled-components";

// Components
import { ListItemGroup } from "@/components/gui/groups";
import { Price } from "@/components/gui/parts"
import { Layout } from "@/components/layouts";

const StyledBrandLabel = styled.span`
  font-size: 0.8em;
  color: #666;
`;
const StyledBrandName = styled.strong`
  font-size: 1em;
  font-weight: bold;
`;

export default {
  name: "ProductListItem",
  props: {
    title: String,
    thumbnail: String,
    priceLabel: String,
    brandName: String
  },
  computed: {
    hasMarginBottom() {
      return { bottom: true }
    },
    noneMarginBottom() {
      return { bottom: false }
    }
  },
  components: {
    StyledBrandLabel,
    StyledBrandName,
    ListItemGroup,
    Layout,
    Price
  }
}
</script>