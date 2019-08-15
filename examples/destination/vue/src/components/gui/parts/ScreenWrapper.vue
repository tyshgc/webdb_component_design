<template>
    <div>
        <header>
            <span>Ξ</span>
            <span><PageTitle :title="pageTitle" /></span>
        </header>
        <main><slot /></main>
    </div>
</template>

<script>
/**
 * ScreenWrapper Parts Component
 */
//import styled from "vue-styled-components"
import PageTitle from "./PageTitle.vue"

export default {
    name: "ScreenWrapper",
    props: {
      pageTitle: String,
    },
    components: {
        PageTitle
    },
    computed: {
        pageTitleString: ()=> this.pageTitle
    }
}
</script>