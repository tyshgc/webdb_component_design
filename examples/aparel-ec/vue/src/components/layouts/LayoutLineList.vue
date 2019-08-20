<template>
  <styled-flex-ul><slot /></styled-flex-ul>
</template>

<script>
/**
 * ラインリスト用レイアウト
 * LineListLayout Component
 */
import styled from "vue-styled-components";

const StyledFlexUl = styled.ul`
  margin: 0;
  padding: 0;
`;

export default {
  name: "LayoutLineList",
  components: {
    StyledFlexUl
  }
}
</script>