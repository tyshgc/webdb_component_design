<script>
/**
 * DestinationEditContainer
 * 宛先編集（登録）のコンテナ
 * <!> message: 非同期処理がないので今回はactionは介していません。Action/Mutationの使い分けなどは適宜プロジェクトでルールを決めてください。
 */
import { connect } from "vuex-connect";
import store from "@/vuex/store";
import MUTATIONTYPE from "@/vuex/mutaitonTypes";

// Utils
import { createMergeProps } from "@/utils/createMergeProps";

// Components
import { DestinationEdit } from "@/components/domain/objects/";

const stateToProps = {
    name: state => {
        return createMergeProps({
            ...state.editDestination.name,
            onChanged: (name, type)=> {
                store.commit(MUTATIONTYPE.WRITE_NAME, {name, type});
            }
        })
    },
    postalCode: state => {
        return createMergeProps({
            ...state.editDestination.postalCode,
            onChanged: (code, type)=> {
                store.commit(MUTATIONTYPE.WRITE_POSTALCODE, {code, type});
            }
        })
    },
    address: state => {
        return createMergeProps({
            prefecture: state.editDestination.prefecture,
            cityStreet: state.editDestination.cityStreet,
            onSelectedPrefecture: (prefecture) => {
                store.commit(MUTATIONTYPE.SELECT_PREFECTURE, {prefecture});
            },
            onCityStreetChanged: (cityStreet) => {
                store.commit(MUTATIONTYPE.WRITE_CITYSTREET, {cityStreet});
            }
        })
    },
    onRegisted: () => function() {
        store.commit(MUTATIONTYPE.REGIST_DESTINATION);
    }
}

export default connect({ stateToProps })("DestinationEditContainer", DestinationEdit)
</script>