<script>
/**
 * BrandCollectionContainer
 * ブランド（一覧）のコンテナ
 */
import { connect } from "vuex-connect";

// Components
import { Brands } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        brands: state => state.brands
    }
})("BrandCollectionContainer", Brands)
</script>