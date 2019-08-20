<script>
/**
 * ProductContainer
 * 商品のコンテナ
 */
import store from "@/vuex/store";
import { connect } from "vuex-connect";

// Components
import { Product } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        //name: () => store.getters.fullName,
        //postalCode: () => store.getters.postalCodeAll,
        address: ()=> store.getters.address
    }
})("ProductContainer", Product)
</script>