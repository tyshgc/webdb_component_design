<template>
    <StyledTitle>{{title}}</StyledTitle>
</template>

<script>
/**
 * PageTitle
 * 画面タイトル
 * @title タイトルテキスト
 */
import styled from "vue-styled-components";

const StyledTitle = styled.h1``;

export default {
    props: {
        title: String
    }, 
    components: {
        StyledTitle
    }
}
</script>