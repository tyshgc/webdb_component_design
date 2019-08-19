<template>
    <styled-flex :column="column">
        <slot />
    </styled-flex>
</template>

<script>
/**
 * Flexレイアウトの子要素用
 * LayoutFlexItem Component
 * @column カラムの数
 * @slot ラップする中身
 */
import styled from "vue-styled-components";

const StyleFlexProps = {column: [Number, String]}
const StyledFlex = styled('div', StyleFlexProps)`
    
  ${props => {
    if (!props.column) return;
    return `flex: ${props.column}`;
  }}
`;


export default {
    name: "LayoutFlexItem",
    props: StyleFlexProps,
    components: {
        StyledFlex
    }
}
</script>