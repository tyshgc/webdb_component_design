<template>
    <StyledSelectBox
      :selected="choice"
      @change="onSelect"
    >
      <option disabled value="">
        選択してください
      </option>
      <option v-for="(choice, key, index) in choices" :key="index">
        {{choice}}
      </option>
    </StyledSelectBox>
</template>

<script>
/**
 * セレクトボックス
 * SelectBox GUI Parts Component
 * @choice 選択肢
 */
import styled from "vue-styled-components";

const StyledSelectBox = styled.select``;

export default {
    name: "SelectBox",
    data() {
      return {
        choice: ""
      }
    },
    created() {
      this.choice = this.selected;
    },
    props: {
        choices: Array,
        selected: String,
        onSelected: Function
    },
    components: {
        StyledSelectBox
    },
    methods: {
      onSelect: function(res) {
        if(!this.onSelected) return;
        this.onSelected(res.target.value)
      }
    }
}
</script>