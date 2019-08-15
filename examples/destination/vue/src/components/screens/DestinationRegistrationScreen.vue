<template>
    <ScreenWrapper pageTitle="宛先登録">
        <DestinationEditContainer />
    </ScreenWrapper>
</template>

<script>
/**
 * 宛先登録画面
 * DestinationRegistration Screen
 */

// Components
import { DestinationEditContainer } from "@/components/containers"
import { ScreenWrapper } from "@/components/gui/parts"

export default {
    name: "DestinationRegistrationScreen",
    components: {
        DestinationEditContainer,
        ScreenWrapper
    }
}
</script>