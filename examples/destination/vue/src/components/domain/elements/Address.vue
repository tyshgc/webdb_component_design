<template>
    <FieldBlockWrapper :heading="FIELDNAME.ADDRESS">
        <strong v-if="address">{{address}}</strong>
        <span v-else>未記入</span>
    </FieldBlockWrapper>
</template>

<script>
/**
 * 宛先の住所表示コンポーネント
 * Display Address Domain Element Component
 * @address 都道府県 + 市区町村 + 町名・番地など
 */
// Constants
import CONSTANTS from "@/constants";

// Components
import { FieldBlockWrapper } from "@/components/gui/parts";

export default {
    name: "Address",
    mixins: [CONSTANTS],
    props: {
        address: String
    },
    components: {
        FieldBlockWrapper
    }
}
</script>