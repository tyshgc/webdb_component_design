<template>
    <styled-Wrapper v-if="heading">
      <styled-heading>{{heading}}</styled-heading>
      <div><slot /></div>
    </styled-Wrapper>
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