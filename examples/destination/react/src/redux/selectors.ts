import { createSelector } from "reselect";

// Types
import { typeState } from "destination";

/**
 * 宛先編集（登録）に関するSelector
 */
export const editDestinationSelectors = {
  name: (state: typeState) => state.editDestination.name,
  postalCode: (state: typeState) => state.editDestination.postalCode,
  prefecture: (state: typeState) => state.editDestination.prefecture,
  cityStreet: (state: typeState) => state.editDestination.cityStreet
};

/**
 * 宛先に関するSelector
 */
const computedName = createSelector(
  (state: typeState) => state.destination.name,
  name => {
    return {
      ...name,
      fullName: name ? `${name.lastName}${name.firstName}` : ``
    };
  }
);

const computedPostalCode = createSelector(
  (state: typeState) => state.destination.postalCode,
  postalCode => {
    if (!postalCode) return postalCode;

    return {
      ...postalCode,
      all:
        postalCode.upper || postalCode.lower
          ? `${postalCode.upper}-${postalCode.lower}`
          : ``
    };
  }
);

const computedAddress = createSelector(
  (state: typeState) => state.destination,
  destination => {
    return `${destination.prefecture}${destination.cityStreet}`;
  }
);

export const destinationSelectors = {
  name: (state: typeState) => computedName(state),
  postalCode: (state: typeState) => computedPostalCode(state),
  address: (state: typeState) => computedAddress(state)
};
