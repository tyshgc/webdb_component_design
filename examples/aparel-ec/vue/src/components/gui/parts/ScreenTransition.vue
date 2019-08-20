<template>
  <styled-link :to="to" v-if="hasSlot"><slot /></styled-link>
  <styled-link :to="to" v-else-if="hasScreenLabel"><slot /></styled-link>
</template>

<script>
/**
 * ScreenTransition GUI Parts Component
 * @screenName 画面名
 */
import Vue from "vue";
import styled from "vue-styled-components";

const RouterLink = Vue.component('router-link')
const StyledLink = styled(RouterLink)`
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
    screenLabel: String
  },
  computed: {
    to() {
      return `/${this.screenName}`
    },
    hasSlot() {
      return this.$slots.default
    },
    hasScreenLabel() {
      return this.screenLabel && !this.$slots.default
    }
  },
  components: {
    StyledLink
  }
}
</script>