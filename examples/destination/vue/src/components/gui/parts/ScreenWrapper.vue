<template>
    <div>
        <styled-nav-bar>
            <layout-flex :height="'100%'">
              <layout-flex-item :column="'80px'">
                <drawer-trigger />
              </layout-flex-item>
              <layout-flex-item :column="'100%'">
                <page-title :title="pageTitle" />
              </layout-flex-item>
              <layout-flex-item :column="'80px'" />
            </layout-flex>
        </styled-nav-bar>

        <styled-main>
          <layout :has-margin="hasMargin" :has-padding="hasPadding">
            <slot />
          </layout>
        </styled-main>
    </div>
</template>

<script>
/**
 * ScreenWrapper Parts Component
 */
import styled from "vue-styled-components"
import PageTitle from "./PageTitle.vue"

// Components
import DrawerTrigger from "./DrawerTrigger"
import { Layout, LayoutFlexItem, LayoutFlex } from "@/components/layouts"

// Constants
const NAV_BAR_HEIGHT = 72;
const LAYOUT_OPTION = {
  MARGIN: {},
  PADDING: { left: true, right: true }
};
  
// Styling
const StyledMain = styled.main`
  overflow: hidden;
  position: relative;
  top: ${NAV_BAR_HEIGHT}px;
`;

const StyledNavBar = styled.header`
  background: #c1c1c1;
  height: ${NAV_BAR_HEIGHT}px;
  padding-top: 12px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

export default {
    name: "ScreenWrapper",
    props: {
      pageTitle: String,
    },
    components: {
        PageTitle,
        StyledMain,
        StyledNavBar,
        DrawerTrigger,
        Layout,
        LayoutFlexItem, 
        LayoutFlex
    },
    computed: {
        pageTitleString() { return this.pageTitle },
        hasMargin() { return LAYOUT_OPTION.MARGIN },
        hasPadding() { return LAYOUT_OPTION.PADDING }
    }
}
</script>