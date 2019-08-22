<template>
    <div>
        <layout>
            <name :full-name="name" />
        </layout>

        <layout>
            <postal-code :code="postalCode" />
        </layout>

        <layout>
            <address-set :address="address" />
        </layout>
    </div>
</template>

<script>
/**
 * 宛先参照（表示）
 * Destination Domain Object Component
 * @name 宛先の名前
 * @postalCode 郵便番号
 * @address 住所
 */

// Components
import { AddressSet, Name, PostalCode } from "@/components/domain/elements";
import { Layout } from "@/components/layouts";


export default {
    name: "Destination",
    props: {
        name: String,
        postalCode: String,
        address: String
    },
    components: {
        AddressSet, 
        Name, 
        PostalCode, 
        Layout 
    }
}
</script>