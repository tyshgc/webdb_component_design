<template>
    <StyledFlexBox 
        :direction="direction" 
        :justify="justify" 
        :vertical-align="verticalAlign" 
        :height="height">
        <slot />
    </StyledFlexBox>
</template>

<script>
/**
 * Flexレイアウト用
 * LayoutFlex Component
 * @slot ラップする中身
 */
import styled from "vue-styled-components";

const StyledFlexBoxProps = {
    direction: String, 
    justify: String, 
    verticalAlign: String, 
    height: [String, Number]
}
const StyledFlexBox = styled("div", StyledFlexBoxProps)`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.verticalAlign || "center"};

  ${(props) => {
    if (!props.height) return;
    return `height: ${props.height}`;
  }}
`;

export default {
    name: "LayoutFlex",
    props: StyledFlexBoxProps,
    components: {
        StyledFlexBox,
    }
}
</script>