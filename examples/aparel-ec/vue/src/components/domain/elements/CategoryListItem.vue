<template>
  <styled-link :href="referLink">
    <list-title :title="name" />
  </styled-link>
</template>

<script>
/**
 * カテゴリ一覧のアイテム
 * CategoryListItem GUI Parts Component
 * 
 */
import styled from "vue-styled-components";

// Components
import { ListTitle } from "@/components/gui/parts";

const StyledLink = styled.a`
  display: block;
  color: #000;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;

export default {
  name: "CategoryListItem",
  props: {
    label: String,
    name: String
  },
  computed: {
    referLink() {
      return `/category/${this.label}`
    } 
  },
  components: {
    StyledLink,
    ListTitle
  }
}
</script>