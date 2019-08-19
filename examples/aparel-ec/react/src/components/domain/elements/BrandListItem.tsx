/**
 * ブランド一覧のリストアイテム
 * BrandListItem Domain Element
 *
 * @name ブランド名
 * @logo ブランドロゴイメージ
 * @onRefered 任意ブランド参照する際のイベント
 */
import React from "react";
import useReactRouter from "use-react-router";
import styled from "styled-components";

// Components
import { ListItemGroup } from "../../gui/groups";
import { Layout } from "../../layouts";

// Constants
import { REFER_BRAND_LINK_LABEL } from "../../../constants";

// Types
import { typeBrand } from "aparel-ec";

interface Props {
  id?: typeBrand["id"];
  name?: typeBrand["name"];
  logo?: typeBrand["logoImage"];
  label?: typeBrand["label"];
}
export const BrandListItem = (props: Props) => {
  const { name, label, logo } = props;
  const hasMarginBottom = { bottom: true };
  const referLink = `/brand/${label}`;
  const { history } = useReactRouter();
  const onScreenTransition = () => history.push(referLink);

  return (
    <ListItemGroup title={name} image={logo} onClicked={onScreenTransition}>
      <Layout hasMargin={hasMarginBottom}>
        <StyledTransitionLabel>{REFER_BRAND_LINK_LABEL}</StyledTransitionLabel>
      </Layout>
    </ListItemGroup>
  );
};

const StyledTransitionLabel = styled.span`
  font-size: 0.8em;
`;
