<template>
    <StyledWrapper :hasPadding="hasPadding" :hasMargin="hasMargin">
      <slot />
    </StyledWrapper>
</template>

<script>
/**
 * レイアウトの子要素用
 * Layout Component
 * @hasPadding paddingの有無[left<Boolean>,top<Boolean>,right<Boolean>,bttom<Boolean>]
 * @hasMargin marginの有無[left<Boolean>,top<Boolean>,right<Boolean>,bttom<Boolean>]
 * @slot ラップする中身
 */
import styled from "vue-styled-components";

const StyledWrapperProps = {
    hasPadding: {
        left: Boolean,
        top: Boolean,
        right: Boolean,
        bottom: Boolean
    }, 
    hasMargin: {
        left: Boolean,
        top: Boolean,
        right: Boolean,
        bottom: Boolean
    }
}

const StyledWrapper = styled("div", StyledWrapperProps)`
  ${props => {
    const hasMargin = props.hasMargin || {};
    const hasPadding = props.hasPadding || {};
    const getSpace = bool => (bool ? `36px` : 0);

    return `
      margin-bottom: ${getSpace(hasMargin.bottom || true)};
      margin-top: ${getSpace(hasMargin.top)};
      margin-right: ${getSpace(hasMargin.right)};
      margin-left: ${getSpace(hasMargin.left)};

      padding-bottom: ${getSpace(hasPadding.bottom)};
      padding-top: ${getSpace(hasPadding.top)};
      padding-right: ${getSpace(hasPadding.right)};
      padding-left: ${getSpace(hasPadding.left)};
    `;
  }};
`;


export default {
    name: "Layout",
    props: StyledWrapperProps,
    components: {
        StyledWrapper
    }
}
</script>