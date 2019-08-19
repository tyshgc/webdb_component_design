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

const StyledTitle = styled.h1`
    text-align: center;
    font-size: 1.4em;
    margin: 0;
    padding: 0;
`;

export default {
    props: {
        title: String
    }, 
    components: {
        StyledTitle
    }
}
</script>