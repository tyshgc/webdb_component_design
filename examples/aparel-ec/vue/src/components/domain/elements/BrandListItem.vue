<template>
  <list-item-group :title="name" :image="logo" :onClicked="onScreenTransition">
      <layout :has-margin="hasMarginBottom">
        <styled-transition-label>{{REFER_BRAND_LINK_LABEL}}</styled-transition-label>
      </layout>
    </list-item-group>
</template>

<script>
/**
 * ブランド一覧のアイテム
 * BrandListItem GUI Parts Component
 * 
 */
import styled from "vue-styled-components";

// Contants
import CONSTANTS from "@/constants"

// Components
import { ListItemGroup } from "@/components/gui/groups";
import { Layout } from "@/components/layouts";

const StyledTransitionLabel = styled.span`
  font-size: 0.8em;
`;

export default {
  name: "BrandListItem",
  mixins: [CONSTANTS],
  props: {
    id: [String, Number],
    name: String,
    logo: String,
    label: String,
  },
  computed: {
    hasMarginBottom() { 
      return { bottom: true } 
    },
    referLink(){
      return `/brand/${this.label}`;
    } 
  },
  methods: {
    onScreenTransition() {
      location.href = this.referLink;
    }
  },
  components: {
    ListItemGroup,
    Layout,
    StyledTransitionLabel
  }
}
</script>