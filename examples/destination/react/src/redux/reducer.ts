/**
 * Redux Reducer
 */
import { reducerWithInitialState } from "typescript-fsa-reducers";
import actions from "./actions";
import { initialState } from "./state";

// Reducers
import { writeNameReducer } from "./reducers/Name";
import { writePostalCodeAction } from "./reducers/PostalCode";
import { selectPrefectureAction } from "./reducers/Prefecture";
import { writeCityStreetAction } from "./reducers/CityStreet";
import { registDestinationAction } from "./reducers/Destination";

const reducers = reducerWithInitialState(initialState)
  .case(actions.writeNameAction, writeNameReducer)
  .case(actions.writePostalCodeAction, writePostalCodeAction)
  .case(actions.selectPrefectureAction, selectPrefectureAction)
  .case(actions.writeCityStreetAction, writeCityStreetAction)
  .case(actions.registDestinationAction, registDestinationAction);

export default reducers;
