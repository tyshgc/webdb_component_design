<template>
    <styled-left @click="onDummy">
      <hamburger-menu />
    </styled-left>
</template>

<script>
import styled from "vue-styled-components";

// todo: drawerのトリガーとBackNav入れたりできるようにする
// SVG
import HamburgerMenu from "@/assets/svg/HamburgerMenu.vue";

const StyledLeft = styled.div`
  text-align: center;
`;

export default {
    name: "DrawerTrigger",
    components: {
        StyledLeft,
        HamburgerMenu
    },
    methods: {
        onDummy() {
            alert(`サンプルなのでドロワーはうごきません…`);
        }
    }
}
</script>