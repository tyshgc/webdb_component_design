<script>
/**
 * ProductCollectionContainer
 * 商品（一覧）のコンテナ
 */
import store from "@/vuex/store";
import { connect } from "vuex-connect";

// Components
import { Products } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        products: ()=> store.getters.productList
    }
})("ProductCollectionContainer", Products)
</script>