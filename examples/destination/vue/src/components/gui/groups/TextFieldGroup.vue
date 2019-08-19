<template>
    <LayoutFlex>
      <LayoutFlexItem v-if="inlineLabel" :column="'20%'" >
        <InlineLabel :text="inlineLabel" />
      </LayoutFlexItem>
      <LayoutFlexItem v-if="inlineLabel" :column="fieldSize">
        <TextField :default-value="defaultValue" :on-changed="onChanged" :width="width" />
      </LayoutFlexItem>
      <TextField v-else :default-value="defaultValue" :on-changed="onChanged" :width="width" />
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
        onChanged: Function,
        width: [Number, String]
    },
    components: {
        LayoutFlex, 
        LayoutFlexItem,
        InlineLabel, 
        TextField
    },
    computed: {
      fieldSize() {
        return this.inlineLabel ? "80%" : undefined;
      }
    }
}
</script>