/**
 * アパレルECのナビゲーション
 * Navigation Domain Object Component
 */
import React from "react";

// Components
import { LayoutLineList, LayoutLineListItem } from "../../layouts/";
import { ListTitle, ScreenTransition } from "../../gui/parts";

// Constans
const NAVIGATIONS = [
  {
    name: "商品",
    to: "product"
  },
  {
    name: "カテゴリ",
    to: "category"
  },
  {
    name: "ブランド",
    to: "brand"
  }
];

export const Navigation = () => {
  const NavigaitonList = NAVIGATIONS.map((navigation, index) => (
    <LayoutLineListItem key={index}>
      <ScreenTransition screenName={navigation.to}>
        <ListTitle title={navigation.name} />
      </ScreenTransition>
    </LayoutLineListItem>
  ));
  return (
    <section>
      <h1>メニュー</h1>
      <LayoutLineList>{NavigaitonList}</LayoutLineList>
    </section>
  );
};
