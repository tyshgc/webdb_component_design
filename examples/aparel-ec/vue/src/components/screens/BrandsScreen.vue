<template>
  <screen-wrapper pageTitle="ブランド">
    <brand-collection-container />
  </screen-wrapper>
</template>

<script>
/**
 * ブランド画面
 * Brand Screen Component
 */
//Components
import { BrandCollectionContainer } from "@/components/containers";
import { ScreenWrapper } from "@/components/gui/parts";

export default {
    name: "BrandScreen",
    components: {
      BrandCollectionContainer,
      ScreenWrapper
    }
}
</script>
