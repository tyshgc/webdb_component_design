<template>
    <styled-switch-wrapper :is-active="toggle" v-on:click="onChanged">
        <styled-toggle-cursor />
    </styled-switch-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledProps = { isActive: Boolean };
const StyledSwitchWrapper = styled('button', StyledProps)`
  display: inline-block;
  border: 2px solid #000;
  border-radius: 999px;
  min-width: 70px;
  padding: 0;
  outline: none;

  ${(props) => `
      background-color: ${props.isActive ? `rgba(0,0,0,.3)` : `transparent`};
      text-align: ${props.isActive ? `right` : `left`}; 
    `}

  margin-left: 12px;
`;
const StyledToggleCursor = styled.i`
  display: inline-block;
  border-radius: 999px;
  width: 30px;
  height: 30px;
  background-color: #000;
  position: relative;
  top: 1px;
  margin: 1px 1.5px 0 1.5px;
`;

export default {
    name: "switcher",
    props: {
      'toggle': Boolean,
      'onChanged': Function
    },
    components: {
        StyledSwitchWrapper,
        StyledToggleCursor
    }
}
</script>