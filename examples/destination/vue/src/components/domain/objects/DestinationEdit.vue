<template>
    <div>
        <layout>
            <name-edit 
                :on-changed="name.onChanged" 
                :first-name="name.firstName" 
                :last-name="name.lastName" />
        </layout>
        <layout>
            <postal-code-edit
                :onChanged="postalCode.onChanged"
                :upper="postalCode.upper"
                :lower="postalCode.lower"
            />
        </layout>
        <layout>
            <address-set-edit
                :on-selected-prefecture="address.onSelectedPrefecture"
                :on-city-street-changed="address.onCityStreetChanged"
                :prefecture="address.prefecture"
                :city-street="address.cityStreet"
            />
        </layout>
        <layout>
            <registration-button :on-registed="onRegisted" />
        </layout>
        <layout-spacer :height="'40px'" />
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
    AddressSetEdit, 
    NameEdit, 
    PostalCodeEdit, 
    RegistrationButton 
} from "@/components/domain/elements";
import { Layout, LayoutSpacer } from "@/components/layouts";

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
        AddressSetEdit, 
        NameEdit, 
        PostalCodeEdit,
        RegistrationButton,
        Layout,
        LayoutSpacer
    }
}
</script>