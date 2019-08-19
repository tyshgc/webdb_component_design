<template>
    <div>
        <StyledNavBar>
            <LayoutFlex :height="'100%'">
              <LayoutFlexItem :column="'80px'">
                <DrawerTrigger />
              </LayoutFlexItem>
              <LayoutFlexItem :column="'100%'">
                <PageTitle :title="pageTitle" />
              </LayoutFlexItem>
              <LayoutFlexItem :column="'80px'" />
            </LayoutFlex>
        </StyledNavBar>

        <StyledMain>
          <Layout :has-margin="hasMargin" :has-padding="hasPadding">
            <slot />
          </Layout>
        </StyledMain>
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