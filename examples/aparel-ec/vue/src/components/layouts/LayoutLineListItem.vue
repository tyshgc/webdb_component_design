<template>
  <styled-list-item><slot /></styled-list-item>
</template>

<script>
/**
 * ラインリストアイテム用レイアウト
 * ListLineItemLayout Component
 */
import styled from "vue-styled-components";

const StyledListItem = styled.li`
  list-style-type: none;
  padding: 24px 1.2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export default {
  name: "LayoutLineListItem",
  components: {
    StyledListItem
  }
}
</script>