<template>
  <screen-wrapper pageTitle="カテゴリ">
    <navigation />
  </screen-wrapper>
</template>

<script>
/**
 * ホーム画面
 * Home Screen
 */
// Components
import { Navigation } from "@/components/domain/objects";
import { ScreenWrapper } from "@/components/gui/parts";

export default {
    name: "HomeScreen",
    components: {
      Navigation,
      ScreenWrapper
    }
}
</script>
