<template>
  <section>
    <h1>メニュー</h1>
    <layout-line-list>
      <layout-line-list-item v-for="(navigation, key, index) in navigations" :key="index">
        <screen-transition :screen-name="navigation.to">
          <list-title :title="navigation.name" />
        </screen-transition>
      </layout-line-list-item>
    </layout-line-list>
  </section>
</template>

<script>
/**
 * アパレルECのナビゲーション
 * Navigation Domain Object Component
 */

// Components
import { LayoutLineList, LayoutLineListItem } from "@/components/layouts/";
import { ListTitle, ScreenTransition } from "@/components/gui/parts";

export default {
  name: "Navigation",
  computed: {
    navigations() {
      return [
        { name: "商品", to: "product" },
        { name: "カテゴリ", to: "category" },
        { name: "ブランド", to: "brand" }
      ]
    }
  },
  components: {
    LayoutLineList, 
    LayoutLineListItem,
    ListTitle, 
    ScreenTransition
  }
}
</script>