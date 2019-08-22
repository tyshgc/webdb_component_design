<template>
    <submit-button :label="'登録する'" :on-pushed="onRegisted" />
</template>

<script>
/**
 * 登録ボタン
 * Resgistration Button
 * @onRegisted 登録する際のイベント
 */

//Components
import { SubmitButton } from "@/components/gui/parts";

export default {
    name: "RegistrationButton",
    props: {
        onRegisted: Function
    },
    components: {
        SubmitButton
    }
}
</script>