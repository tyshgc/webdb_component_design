/**
 * 宛先の住所（市区町村・番地以下）に関するMutation
 */
export const writeCityStreetMutation = (state, payload) => {
  if (!payload.cityStreet) return;

  state.editDestination.cityStreet = payload.cityStreet;
}
