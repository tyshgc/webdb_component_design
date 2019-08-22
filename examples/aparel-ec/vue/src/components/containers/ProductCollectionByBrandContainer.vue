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
        products: ()=> {
            console.log(`container`,store)
            return store.getters.productListByBrand}
    }
})("ProductCollectionByBrandContainer", Products)
</script>