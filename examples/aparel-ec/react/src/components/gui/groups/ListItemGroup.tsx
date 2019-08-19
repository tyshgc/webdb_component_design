/**
 * ListItemのグループ
 * ListItemGroup GUI Group Component
 * @title
 * @imageURL
 */
import React from "react";

// Components
import { Layout } from "../../layouts";
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
    <div>
      <Layout hasMargin={hasBottomMargin}>
        <ListThumbnailImage image={image} />
      </Layout>
      <Layout hasMargin={hasBottomMargin}>
        <ListTitle title={title} />
      </Layout>

      <>{children}</>
    </div>
  );
};
