<template>
    <styled-heading-one>{{text}}</styled-heading-one>
</template>

<script>
/**
 * 見出し
 * Heading GUI parts Component
 */
import styled from "vue-styled-components";

const StyledHeadingOne = styled.h1``;

export default {
    name: "Heading",
    props: {
      text: String,
    },
    components: {
        StyledHeadingOne
    }
}
</script>
