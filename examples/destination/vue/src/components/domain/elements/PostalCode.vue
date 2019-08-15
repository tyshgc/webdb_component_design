<template>
    <FieldBlockWrapper :heading="FIELDNAME.POSTALCODE">
        <strong v-if="code">{{code}}</strong>
        <span v-else>未記入</span>
    </FieldBlockWrapper>
</template>

<script>
/**
 * 宛先の郵便番号表示コンポーネント
 * Display PostalCode Domain Element Component
 * @upper 宛先の郵便番号 上三桁
 * @lower 宛先の郵便番号 下四桁
 */

// Constants
import CONSTANTS from "@/constants";

// Components
import { FieldBlockWrapper } from "@/components/gui/parts";

export default {
    name: "PostalCode",
    mixins: [CONSTANTS],
    props: {
        code: String
    },
    computed: {
        postalCodeString: ()=> {
            return this.code ? this.code : "未記入";
        }
    },
    components: {
        FieldBlockWrapper
    }
}
</script>