<template>
    <screen-wrapper page-title="HOME">
        <dashboard />
    </screen-wrapper>
</template>

<script>
/**
 * ホーム画面
 * Home Screen
 */

// Components
import { Dashboard } from "@/components/domain/objects"
import { ScreenWrapper } from "@/components/gui/parts"

export default {
    name: "HomeScreen",
    components: {
        Dashboard,
        ScreenWrapper
    }
}
</script>