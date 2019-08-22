<template>
  <screen-wrapper pageTitle="カテゴリ">
    <select-category-container />
    <product-collection-by-category-container />
  </screen-wrapper>
</template>

<script>
/**
 * 任意カテゴリの詳細画面
 * CategoryDetail Screen Component
 */
import store from "@/vuex/store";
import MUTATIONTYPE from "@/vuex/mutaitonTypes";

//Components
import { SelectCategoryContainer, ProductCollectionByCategoryContainer } from "@/components/containers";
import { ScreenWrapper } from "@/components/gui/parts";

export default {
    name: "CategoryDetailScreen",
    props:{
      label: String
    },
    components: {
      SelectCategoryContainer, 
      ProductCollectionByCategoryContainer,
      ScreenWrapper
    },
    created() {
      store.commit(MUTATIONTYPE.SELECT_CATEGORY, this.label)
    }
}
</script>
