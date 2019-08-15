/**
 * ListItemのグループ
 * ListItemGroup GUI Group Component
 * @title
 * @imageURL
 */
import React from "react";

// Components
import { BlockLayout } from "../../layouts";
import { ListThumbnailImage, ListTitle } from "../parts/";
interface Props {
  title?: string;
  image?: string;
  children?: React.ReactNode;
}
export const ListItemGroup = (props: Props) => {
  const { title, image, children } = props;
  const hasBottomMargin = { bottom: true };
  return (
    <>
      <BlockLayout hasMargin={hasBottomMargin}>
        <ListThumbnailImage image={image} />
      </BlockLayout>
      <BlockLayout hasMargin={hasBottomMargin}>
        <ListTitle title={title} />
      </BlockLayout>

      <>{children}</>
    </>
  );
};
