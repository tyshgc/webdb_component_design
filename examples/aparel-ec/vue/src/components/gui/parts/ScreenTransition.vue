<template>
  <styled-link :href="to" v-if="hasSlot"><slot /></styled-link>
  <styled-link :href="to" v-else-if="hasScreenLabel"><slot /></styled-link>
</template>

<script>
/**
 * ScreenTransition GUI Parts Component
 * @screenName 画面名
 */
import styled from "vue-styled-components";

const StyledLink = styled.a`
  display: block;
  color: #000;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;

export default {
  name: "ScreenTransition",
  props: {
    screenName: String
  },
  computed: {
    to() {
      return `/${this.screenName}`
    },
    hasSlot() {
      return this.$slots.default
    },
    hasScreenLabel() {
      return this.screenName && !this.$slots.default
    }
  },
  components: {
    StyledLink
  }
}
</script>