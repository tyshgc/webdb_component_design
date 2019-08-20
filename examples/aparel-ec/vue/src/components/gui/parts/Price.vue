<template>
  <div>
    <styled-prefiex>¥</styled-prefiex>
    <styled-value>{{value}}</styled-value>
  </div>
</template>

<script>
/**
 * 値段の表示
 * Price GUI Parts Component
 * @value 値段
 */
import styled from "vue-styled-components";

const StyledPrefiex = styled.i`
  font-size: 1em;
  font-weight: bold;
  font-style: normal;
`;
const StyledValue = styled.strong`
  font-size: 2em;
  font-weigt: bold;
`;

export default {
  name: "Price",
  props: {
    value: [Number, String]
  },
  components: {
    StyledPrefiex,
    StyledValue
  }
}
</script>