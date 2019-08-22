<script>
/**
 * SelectCategoryContainer
 * 任意カテゴリのコンテナ
 */
import { connect } from "vuex-connect";

// Components
import { Category } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        name: state=> state.selectProductsByCategory.category.name
    }
})("SelectCategoryContainer", Category)
</script>