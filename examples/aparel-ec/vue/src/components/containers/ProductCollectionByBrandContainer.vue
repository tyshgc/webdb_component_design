<script>
/**
 * ProductCollectionByBrandContainer
 * ブランド別商品（一覧）のコンテナ
 */
import store from "@/vuex/store";
import { connect } from "vuex-connect";

// Components
import { Products } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        //name: () => store.getters.fullName,
        //postalCode: () => store.getters.postalCodeAll,
        address: ()=> store.getters.address
    }
})("ProductCollectionByBrandContainer", Products)
</script>