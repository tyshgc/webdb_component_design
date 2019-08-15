<template>
    <LayoutFlex>
      <LayoutFlexItem :column="1">
        <InlineLabel :text="inlineLabel" />
      </LayoutFlexItem>
      <LayoutFlexItem :column="2">
        <TextField :default-value="defaultValue" :on-changed="onChanged" />
      </LayoutFlexItem>
    </LayoutFlex>
</template>

<script>
/**
 * テキストフィールドのグループ
 * TextField Group GUI Component
 * @inlineLabel ラベル
 * @defaultValue テキストフィールドの初期値
 * @onChanged 入力時の変更イベント
 */

// Components
import { LayoutFlex, LayoutFlexItem } from "@/components/layouts";
import { InlineLabel, TextField } from "@/components/gui/parts/";

export default {
    name: "TextFieldGroup",
    props: {
        inlineLabel: String,
        defaultValue: String,
        onChanged: Function
    },
    components: {
        LayoutFlex, 
        LayoutFlexItem,
        InlineLabel, 
        TextField
    }
}
</script>