<template>
    <StyledWrapper v-if="heading">
      <StyledHeading>{{heading}}</StyledHeading>
      <div><slot /></div>
    </StyledWrapper>
</template>

<script>
/**
 * 見出し付きのフィールドブロック
 * FieldBlockWrapper GUI Parts Component
 */
import styled from "vue-styled-components"

const StyledWrapper = styled.section``;
const StyledHeading = styled.h1``;

export default {
    name: "FieldBlockWrapper",
    props: {
        heading: String
    },
    components: {
        StyledWrapper,
        StyledHeading
    }
}
</script>