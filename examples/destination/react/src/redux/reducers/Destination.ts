/**
 * 宛先に関するReducer
 */
import { typeState } from "../../types/State";

export const registDestinationAction = (state: typeState) => {
  const destination = state.editDestination;
  return Object.assign({}, state, { destination });
};
