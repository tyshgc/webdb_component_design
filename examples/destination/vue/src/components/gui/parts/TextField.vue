<template>
    <StyledFiled
      :placeholder="placeholder || '入力してください…'"
      :value="text"
      :width="width"
      @input="onInputed"
    />
</template>

<script>
//@input="onInputed"
/**
 * テキストフィールド
 * TextField GUI Component
 * @defaultValue 初期に表示する値
 * @placeholder プレイスホルダーに表示するテキスト
 * @onChanged 入力変更時のイベント
 */
import styled from "vue-styled-components";

// input要素をTextFiled用のスタイルとしてラップ
const StyledFieldProps = {
  width: [Number, String],
}
const StyledFiled = styled("input", StyledFieldProps)`
  border: 1px solid #676767;
  border-radius: 6px;
  font-size: 1.4em;
  outline: none;
  padding: 10px 8px 8px;
  width: ${(props) => props.width || "auto"};
`;

export default {
    name: "TextField",
    data() {
      return {
        text: ""
      }
    },
    props: {
        ...StyledFieldProps,
        defaultValue: String,
        placeholder: String,
        onChanged: Function
    },
    components: {
        StyledFiled
    },
    created() {
      this.text = this.defaultValue;
    },
    methods: {
      onInputed(res) {
        if(!this.onChanged) return;
        
        const value = res.target.value;
        this.onChanged(value);
      }
    }
}
</script>