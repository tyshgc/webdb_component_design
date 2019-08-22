<template>
    <field-block-wrapper :heading="FIELDNAME.NAME">
        <strong v-if="fullName">{{fullName}}</strong>
        <span v-else>未記入</span>
    </field-block-wrapper>
</template>

<script>
/**
 * 宛先の名前表示コンポーネント
 * Name Domain Element Component
 * @name 宛先の名前
 */

// Constants
import CONSTANTS from "@/constants";

// Components
import { FieldBlockWrapper } from "@/components/gui/parts";

export default {
    name: "Name",
    mixins: [CONSTANTS],
    props: {
        fullName: String
    },
    components: {
        FieldBlockWrapper
    }
}
</script>