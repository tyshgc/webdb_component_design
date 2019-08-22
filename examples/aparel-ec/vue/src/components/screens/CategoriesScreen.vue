<template>
  <screen-wrapper pageTitle="カテゴリ">
    <category-collection-container />
  </screen-wrapper>
</template>

<script>
/**
 * カテゴリ画面
 * Categories Screen Component
 */
//Components
import { CategoryCollectionContainer } from "@/components/containers";
import { ScreenWrapper } from "@/components/gui/parts";

export default {
    name: "CategoriesScreen",
    components: {
      CategoryCollectionContainer,
      ScreenWrapper
    }
}
</script>
