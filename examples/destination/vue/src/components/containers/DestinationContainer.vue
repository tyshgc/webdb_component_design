<script>
/**
 * DestinationContainer
 * 宛先のコンテナ
 */
import store from "@/vuex/store";
import { connect } from "vuex-connect";

// Components
import { Destination } from "@/components/domain/objects/";

export default connect({
    stateToProps:  {
        name: () => store.getters.fullName,
        postalCode: () => store.getters.postalCodeAll,
        address: ()=> store.getters.address
    }
})("DestinationContainer", Destination)
</script>