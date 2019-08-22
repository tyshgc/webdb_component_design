<template>
  <screen-wrapper pageTitle="商品">
    <product-collectionContainer />
  </screen-wrapper>
</template>

<script>
/**
 * 商品画面
 * Products Screen
 */
// Components
import { ProductCollectionContainer } from "@/components/containers";
import { ScreenWrapper } from "@/components/gui/parts";

export default {
    name: "ProductScreen",
    components: {
      ProductCollectionContainer,
      ScreenWrapper
    }
}
</script>
