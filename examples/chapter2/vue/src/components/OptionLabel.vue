<template>
    <styled-label v-on:click="onClicked">{{text}}</styled-label>
</template>

<script>
import styled from "vue-styled-components";

const StyledLabel = styled.label`
  position: relative;
  top: -7px;
  margin-left: 12px;
`;

export default {
    name: 'OptionLabel',
    props: {
      'text': String,
      'onClicked': Function
    },
    components: {
        StyledLabel
    }
}
</script>