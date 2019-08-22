<script>
/**
 * SelectBrandContainer
 * 任意ブランドのコンテナ
 */
import { connect } from "vuex-connect";

// Components
import { Brand } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        name: state=> state.selectProductsByBrand.brand.name
    }
})("SelectBrandContainer", Brand)
</script>