<template>
  <StyledTitle>{{titleString}}</StyledTitle>
</template>

<script>
/**
 * リストタイトル
 * ListTitle GUI Parts
 * @title タイトル
 */
import styled from "vue-styled-components";

const StyledTitle = styled.strong`
  font-size: 1.6em;
  font-weight: bold;
`;

export default {
  name: "ListTitle",
  props: {
    title: String
  },
  computed: {
    titleString() {
      return this.title || "タイトル未設定"
    }
  },
  components: {
    StyledTitle
  }
}
</script>