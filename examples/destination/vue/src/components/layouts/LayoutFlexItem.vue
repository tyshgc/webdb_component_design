<template>
    <div><slot /></div>
</template>

<script>
/**
 * Flexレイアウトの子要素用
 * LayoutFlexItem Component
 * @column カラムの数
 * @slot ラップする中身
 */

export default {
    name: "LayoutFlexItem",
    prop: {
        column: Number
    }
}
</script>