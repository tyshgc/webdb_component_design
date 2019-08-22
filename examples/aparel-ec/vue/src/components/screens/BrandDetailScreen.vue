<template>
  <screen-wrapper pageTitle="ブランド">
    <select-brand-container />
    <product-collection-by-brand-container />
  </screen-wrapper>
</template>

<script>
/**
 * 任意ブランドの詳細画面
 * BrandDetail Screen Component
 */
import store from "@/vuex/store";
import MUTATIONTYPE from "@/vuex/mutaitonTypes";

//Components
import { SelectBrandContainer, ProductCollectionByBrandContainer } from "@/components/containers";
import { ScreenWrapper } from "@/components/gui/parts";

export default {
    name: "BrandDetailScreen",
    props:{
      label: String
    },
    components: {
      SelectBrandContainer, 
      ProductCollectionByBrandContainer,
      ScreenWrapper
    },
    created() {
      store.commit(MUTATIONTYPE.SELECT_BRAND, this.label)
    }
}
</script>
