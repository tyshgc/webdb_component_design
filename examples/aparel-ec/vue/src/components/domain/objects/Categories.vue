<template>
  <layout-line-list>
    <layout-line-list-item v-for="(category, key, index) in categories" :key="index">
      <category-list-item 
        :name="category.name"
        :label="category.label" />
    </layout-line-list-item>
  </layout-line-list>
</template>

<script>
/**
 * カテゴリ一覧
 * Categories Domain Object
 * @categories カテゴリ
 */

// Components
import { LayoutLineList, LayoutLineListItem } from "@/components/layouts";
import { CategoryListItem } from "@/components/domain/elements";

export default {
  name: "Categories",
  props: {
    categories: Array
  },
  components: {
    LayoutLineList, 
    LayoutLineListItem,
    CategoryListItem
  }
}
</script>