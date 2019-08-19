<template>
    <StyledSpacer :height="height" />
</template>

<script>
import styled from "vue-styled-components";

const StyledSpacerProps = { height: [Number, String] }
const StyledSpacer = styled("i", StyledSpacerProps)`
    display: block;
    height: ${props => props.height || "0"};
`

export default {
    name: "LayoutSpacer",
    props: StyledSpacerProps,
    components: {
        StyledSpacer
    }
}
</script>