<script>
/**
 * CategorieCollectionContainer
 * カテゴリ（一覧）のコンテナ
 */
import store from "@/vuex/store";
import { connect } from "vuex-connect";

// Components
import { Categories } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        //name: () => store.getters.fullName,
        //postalCode: () => store.getters.postalCodeAll,
        address: ()=> store.getters.address
    }
})("CategorieCollectionContainer", Categories)
</script>