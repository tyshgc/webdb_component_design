<template>
    <screen-wrapper page-title="宛先登録">
        <destination-edit-container />
    </screen-wrapper>
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