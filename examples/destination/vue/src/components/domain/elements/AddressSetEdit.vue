<template>
    <div>
        <field-block-wrapper :heading="FIELDNAME.PREFECTURE">
            <select-box
                :choices="PREFECTURES"
                :selected="prefecture"
                :on-selected="onSelectedPrefecture"
            />
        </field-block-wrapper>
        <field-block-wrapper :heading="FIELDNAME.CITYSTREET">
            <text-field-group 
                :default-value="cityStreet" 
                :on-changed="onCityStreetChanged" 
                :width="'100%'"
            />
        </field-block-wrapper>
    </div>
</template>

<script>
/**
 * 宛先の名前編集コンポーネント
 * Edit Name Domain Element Component
 * @prefecture 都道府県
 * @cityStreet 市区町村 + 町名・番地など
 * @onCityStreetChanged 宛先の住所を変更する際の入力イベント
 * @onSelectedPrefecture 都道府県の選択イベント
 */
// Constants
import CONSTANTS from "@/constants";

// Components
import { TextFieldGroup } from "@/components/gui/groups"
import { FieldBlockWrapper, SelectBox } from "@/components/gui/parts";

export default {
    name: "AddressSetEdit",
    mixins: [CONSTANTS],
    props: {
        prefecture: String,
        cityStreet: String,
        onSelectedPrefecture: Function,
        onCityStreetChanged: Function
    },
    components: {
        FieldBlockWrapper,
        SelectBox,
        TextFieldGroup
    }
}
</script>