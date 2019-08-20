<template>
  <styled-flex-ul :direction="direction" :justify="justify" :vertical-align="verticalAlign" ><slot /></styled-flex-ul>
</template>

<script>
/**
 * リスト用レイアウト
 * ListLayout Component
 * @direction Flexの方向 {default: row}
 * @justify Flexの横方向の間隔 {default: space-between}
 * @verticalAlign Flexの縦方向の整列 {default: center}
 */
import styled from "vue-styled-components";

const StyledProps = {
  direction: String,
  justify: String,
  verticalAlign: String
}

const StyledFlexUl = styled('ul', StyledProps)`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "space-between"};
  align-items: ${props => props.verticalAlign || "center"};
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  background-repeat: repeat-y;
  background-position: 50% 0;
  background-image: url('data:image/svg+xml;utf8, 
  <svg width="1px" height="25px" viewBox="0 0 1 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="rgba(0,0,0,.1)" x="0" y="-1" width="1" height="27"></rect></svg>');
`;

export default {
  name: "LayoutList",
  props: StyledProps,
  components: {
    StyledFlexUl
  }
}
</script>