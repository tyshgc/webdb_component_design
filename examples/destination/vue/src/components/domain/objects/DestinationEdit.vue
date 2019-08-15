<template>
    <div>
        <Layout>
            <NameEdit 
                :on-changed="name.onChanged" 
                :first-name="name.firstName" 
                :last-name="name.lastName" />
        </Layout>
        <Layout>
            <PostalCodeEdit
                :onChanged="postalCode.onChanged"
                :upper="postalCode.upper"
                :lower="postalCode.lower"
            />
        </Layout>
        <Layout>
            <AddressEdit
                :on-selected-prefecture="address.onSelectedPrefecture"
                :on-city-street-changed="address.onCityStreetChanged"
                :prefecture="address.prefecture"
                :city-street="address.cityStreet"
            />
        </Layout>
        <Layout>
            <RegistrationButton :on-registed="onRegisted" />
        </Layout>
    </div>
</template>

<script>
/**
 * 宛先登録
 * Destination Edit Domain Object Component
 * @name 宛先の名前
 * @postalCode 郵便番号
 * @address 住所
 * @onRegisted 宛先登録時のイベント
 */

// Components
import { 
    AddressEdit, 
    NameEdit, 
    PostalCodeEdit, 
    RegistrationButton 
} from "@/components/domain/elements";
import { Layout } from "@/components/layouts";

export default {
    name: "DestinationEdit",
    props: {
        name: {
            firstName: String,
            lastName: String,
            onChanged: Function
        },
        postalCode: {
            upper: String,
            lower: String,
            onChanged: Function
        },
        address: {
            prefecture: String,
            cityStreet: String,
            onCityStreetChanged: Function,
            onSelectedPrefecture: Function
        },
        onRegisted: Function
    },
    components: {
        AddressEdit, 
        NameEdit, 
        PostalCodeEdit,
        RegistrationButton,
        Layout 
    }
}
</script>