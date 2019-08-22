<template>
  <styled-main>
      <layout
        :has-margin="layoutOption.MARGIN"
        :has-padding="layoutOption.PADDING"
      >
        <h1 v-if="pageTitle">{{pageTitle}}</h1>
        <slot />
      </layout>
    </styled-main>
</template>

<script>
/**
 * ScreenWrapper GUI Parts Component
 */
import styled from "vue-styled-components";

// Components
import { Layout } from "@/components/layouts";

// Constants
const LAYOUT_OPTION = {
  MARGIN: {},
  PADDING: { left: true, right: true }
};

const StyledMain = styled.main`
  overflow: hidden;
  padding-top: 32px;
`;

export default {
  name: "ScreenWrapper",
  props: {
    pageTitle: String
  },
  computed: {
    layoutOption() {
      return LAYOUT_OPTION
    }
  },
  components: {
    StyledMain,
    Layout
  }
}
</script>