<template>
    <div>
        <FieldBlockWrapper :heading="FIELDNAME.PREFECTURE">
            <SelectBox
                :choices="PREFECTURES"
                :selected="prefecture"
                :on-selected="onSelectedPrefecture"
            />
        </FieldBlockWrapper>
        <FieldBlockWrapper :heading="FIELDNAME.CITYSTREET">
            <TextFieldGroup 
                :default-value="cityStreet" 
                :on-changed="onCityStreetChanged" 
                :width="'100%'"
            />
        </FieldBlockWrapper>
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
    name: "AddressEdit",
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