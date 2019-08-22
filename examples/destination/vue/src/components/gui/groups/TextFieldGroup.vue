<template>
    <layout-flex>
      <layout-flex-item v-if="inlineLabel" :column="'32px'" >
        <inline-label :text="inlineLabel" />
      </layout-flex-item>
      <layout-flex-item v-if="inlineLabel" :column="fieldSize">
        <text-field :default-value="defaultValue" :on-changed="onChanged" :width="width" />
      </layout-flex-item>
      <text-field v-else :default-value="defaultValue" :on-changed="onChanged" :width="width" />
    </layout-flex>
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