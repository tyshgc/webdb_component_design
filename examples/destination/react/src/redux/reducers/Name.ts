/**
 * 宛先の名前に関するReducer
 */
import { typeState } from "../../types/State";
import { NAME_TYPE, typeNamePayload } from "../../types/Name";

export const writeNameReducer = (
  state: typeState,
  payload: typeNamePayload
) => {
  if (!payload.name) return Object.assign({}, state);

  let name;

  switch (payload.type) {
    case NAME_TYPE.FIRST_NAME:
      name = {
        firstName: payload.name,
        lastName: state.editDestination.name!.lastName
      };
      break;
    case NAME_TYPE.LAST_NAME:
      name = {
        firstName: state.editDestination.name!.firstName,
        lastName: payload.name
      };
      break;
  }

  const editDestination = {
    ...state.editDestination,
    name
  };

  return Object.assign({}, state, { editDestination });
};
