/**
 * 宛先の郵便番号に関するReducer
 */
import { typeState, typePostalCodePayload } from "destination";
import { POSTALCODE_TYPE } from "../../enums";

export const writePostalCodeAction = (
  state: typeState,
  payload: typePostalCodePayload
) => {
  if (!payload.code) return Object.assign({}, state);

  let postalCode;

  switch (payload.type) {
    case POSTALCODE_TYPE.UPPER:
      postalCode = {
        upper: payload.code,
        lower: state.editDestination.postalCode!.lower
      };
      break;

    case POSTALCODE_TYPE.LOWER:
      postalCode = {
        upper: state.editDestination.postalCode!.upper,
        lower: payload.code
      };
      break;
  }

  const editDestination = {
    ...state.editDestination,
    postalCode
  };

  return Object.assign({}, state, { editDestination });
};
