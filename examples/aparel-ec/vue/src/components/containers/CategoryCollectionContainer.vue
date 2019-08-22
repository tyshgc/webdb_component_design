<script>
/**
 * CategoryCollectionContainer
 * カテゴリ（一覧）のコンテナ
 */
import { connect } from "vuex-connect";

// Components
import { Categories } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        categories: state => state.categories
    }
})("CategoryCollectionContainer", Categories)
</script>