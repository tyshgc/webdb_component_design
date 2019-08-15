/**
 * ListThumbnailImage
 * @imageURL
 */
import React from "react";
import styled from "styled-components";

// Constants
const THUMBS_IMAGE_SIZE = 160;

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
