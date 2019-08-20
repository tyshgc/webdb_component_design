/**
 * ListThumbnailImage
 * @image 画像のURL
 */
import React from "react";
import styled from "styled-components";

// Constants
import { THUMBS_IMAGE_SIZE } from "../../../constants";

interface Props {
  image?: string;
}
export const ListThumbnailImage = (props: Props) => {
  const { image } = props;
  const HasImage = () =>
    image ? <StyledImage src={image} /> : <StyledNoneImage />;
  return <>{HasImage()}</>;
};

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
