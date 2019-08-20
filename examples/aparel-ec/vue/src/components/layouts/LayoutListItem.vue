<template>
  <styled-list-item :column="column"><slot /></styled-list-item>
</template>

<script>
/**
 * リストアイテム用レイアウト
 * ListItemLayout Component
 * @column カラムの幅
 */
import styled from "vue-styled-components";

const StyledProps = {
  column: [Number, String]
}
const StyledListItem = styled('li', StyledProps)`
  list-style-type: none;
  text-align: center;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
  padding-top: 16px;

  ${(props) => {
    if (!props.column) return;
    return `flex: ${props.column}`;
  }}
`;

export default {
  name: "LayoutListItem",
  props: StyledProps,
  components: {
    StyledListItem
  }
}
</script>