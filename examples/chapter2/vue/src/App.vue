<template>
  <StyledWrapper>
    <display-switch :heading="`Vueコンポーンネント`" />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import DisplaySwitch from "./DisplaySwitch.vue";

const StyledWrapper = styled.main`
  padding: 24px 12px;
`;

export default {
  name: 'app',
  components: {
    DisplaySwitch,
    StyledWrapper
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
