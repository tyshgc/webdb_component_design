<template>
    <label :v-if="text">{{text}}</label>
</template>

<script>
/**
 * インラインラベル
 * @text ラベルにするテキスト
 */
export default {
    name: "InlineLabel",
    props: {
        text: String
    }
}
</script>