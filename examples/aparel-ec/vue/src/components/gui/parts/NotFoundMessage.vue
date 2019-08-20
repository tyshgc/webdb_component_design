<template>
  <styled-message>何もみつかりませんでした…</styled-message>
</template>

<script>
/**
 * NotfoundMessage GUI Parts Component
 */
import styled from "vue-styled-components";

const StyledMessage = styled.div`
  font-size: 1.6em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export default {
  name: "NotFoundMessage",
  components: {
    StyledMessage
  }
}
</script>