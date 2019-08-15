<template>
    <div>
        <Layout>
            <Name :full-name="name" />
        </Layout>

        <Layout>
            <PostalCode :code="postalCode" />
        </Layout>

        <Layout>
            <Address :address="address" />
        </Layout>
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
import { Address, Name, PostalCode } from "@/components/domain/elements";
import { Layout } from "@/components/layouts";


export default {
    name: "Destination",
    props: {
        name: String,
        postalCode: String,
        address: String
    },
    components: {
        Address, 
        Name, 
        PostalCode, 
        Layout 
    }
}
</script>