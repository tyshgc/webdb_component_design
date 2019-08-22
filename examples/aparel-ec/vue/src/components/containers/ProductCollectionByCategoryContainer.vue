<script>
/**
 * ProductCollectionByCategoryContainer
 * カテゴリ別商品（一覧）のコンテナ
 */
import store from "@/vuex/store";
import { connect } from "vuex-connect";

// Components
import { Products } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        products: ()=> store.getters.productListByCategory
    }
})("ProductCollectionByCategoryContainer", Products)
</script>