<template>
    <styled-button @click="onClick">{{label}}</styled-button>
</template>

<script>
/**
 * サブミットボタン
 * Submit Button GUI parts Component
 * @label ボタンのラベル
 * @onPushed ボタン押下時のイベント
 */
import styled from "vue-styled-components";

const StyledButton = styled.button`
  background-color: #000;
  border: none;
  border-radius: 999px;
  color: #fff;
  font-size: 1.1em;
  min-width: 200px;
  padding: 9px 24px 8px;
  text-align: center;
`;

export default {
    name: "SubmitButton",
    props: {
        label: {
            type: String,
            default: "OK"
        },
        onPushed: Function
    },
    components: {
        StyledButton
    },
    methods: {
        onClick() {
            if(!this.onPushed) return;
            this.onPushed()
        }
    }
}
</script>