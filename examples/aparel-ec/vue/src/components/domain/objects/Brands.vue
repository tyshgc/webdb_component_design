<template>
  <layout-list>
    <layout-list-item v-for="(brand, key, index) in brands" :key="index">
      <brand-list-item 
        :logo="brand.logoImage" 
        :id="brand.id" 
        :name="brand.name" 
        :label="brand.label" />
    </layout-list-item>
  </layout-list>
</template>

<script>
/**
 * ブランド一覧
 * Brands Domain Object
 * @brands ブランド
 */

// Components
import { LayoutList, LayoutListItem } from "@/components/layouts";
import { BrandListItem } from "@/components/domain/elements";

export default {
  name: "Brands",
  props: {
    brands: Array
  },
  components: {
    LayoutList, 
    LayoutListItem,
    BrandListItem
  }
}
</script>