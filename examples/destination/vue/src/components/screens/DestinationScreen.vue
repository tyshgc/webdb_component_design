<template>
    <screen-wrapper page-title="宛先">
        <destination-container />
    </screen-wrapper>
</template>

<script>
/**
 * 宛先画面
 * Destination Screen
 */

// Components
import { DestinationContainer } from "@/components/containers"
import { ScreenWrapper } from "@/components/gui/parts"

export default {
    name: "DestinationScreen",
    components: {
        DestinationContainer,
        ScreenWrapper
    }
}
</script>