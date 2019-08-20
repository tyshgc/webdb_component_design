<template>
  <styled-image v-if="image" :src="image" />
  <styled-none-image v-else />
</template>

<script>
/**
 * ListThumbnailImage
 * @image 画像のURL
 */
import styled from "vue-styled-components";
import { THUMBS_IMAGE_SIZE } from "@/constants";

const widthHeight = `
  width: ${THUMBS_IMAGE_SIZE}px;
  height: ${THUMBS_IMAGE_SIZE}px;
`;
const StyledImage = styled.img`
  ${widthHeight}
  border-radius: 6px;
`;
const StyledNoneImage = styled.div`
  ${widthHeight}
  background-color: #000;
  border-radius: 6px;
`;

export default {
  name: "ListThumbnailImage",
  props: {
    image: String
  },
  components: {
    StyledImage,
    StyledNoneImage
  }
}
</script>