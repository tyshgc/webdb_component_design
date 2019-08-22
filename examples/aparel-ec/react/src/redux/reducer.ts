/**
 * Redux Reducer
 */
import { reducerWithInitialState } from "typescript-fsa-reducers";
import actions from "./actions";
import { initialState } from "./state";

// Reducers
import { selectProductAction } from "./reducers/Product";
import { selectCategoryAction } from "./reducers/Category";
import { selectBrandAction } from "./reducers/Brand";

const reducers = reducerWithInitialState(initialState)
  .case(actions.referProductDetailAction, selectProductAction)
  .case(actions.referProductsByCategoryAction, selectCategoryAction)
  .case(actions.referProductsByBrandAction, selectBrandAction);

export default reducers;
