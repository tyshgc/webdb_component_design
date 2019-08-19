/**
 * テキストフィールドのグループ
 * TextField Group GUI Component
 * @inlineLabel ラベル
 * @defaultValue テキストフィールドの初期値
 * @onChanged 入力時の変更イベント
 *
 * ※誌面上では以下のコンポーネントはそれぞれの場所に移動しています。
 * - InlineLabel コンポーネント -> `gui/parts/InlineLabel.tsx`
 * - LayoutFlexItem コンポーネント -> `layouts/LayoutFlexItem.tsx`
 * - LayoutFlex コンポーネント -> `layouts/LayoutFlex.tsx`
 */
import React from "react";

// Components
import { LayoutFlex, LayoutFlexItem } from "../../layouts";
import { InlineLabel, TextField } from "../parts/";

interface Props {
  inlineLabel?: string;
  defaultValue?: string;
  width?: number | string;
  onChanged?: (res: React.BaseSyntheticEvent) => void;
}

export const TextFieldGroup = (props: Props) => {
  const { inlineLabel, defaultValue, onChanged, width } = props;
  const fieldSize = inlineLabel ? "80%" : undefined;
  const InlineLabelFlex = () => {
    if (!inlineLabel) return;
    return (
      <LayoutFlexItem column={"20%"}>
        <InlineLabel text={inlineLabel} />
      </LayoutFlexItem>
    );
  };
  const Field = () => (
    <TextField
      defaultValue={defaultValue}
      onChanged={onChanged}
      width={width}
    />
  );
  const FlexField = () => {
    if (!inlineLabel) {
      return <>{Field()}</>;
    }

    return <LayoutFlexItem column={fieldSize}>{Field()}</LayoutFlexItem>;
  };

  return (
    <LayoutFlex>
      {InlineLabelFlex()}
      {FlexField()}
    </LayoutFlex>
  );
};
