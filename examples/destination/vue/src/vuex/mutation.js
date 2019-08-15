// Mutation
import MUTATIONTYPE from "./mutaitonTypes";
import { writeNameMutation } from "./mutations/Name";
import { writeCityStreetMutation } from "./mutations/CityStreet";
import { writePostalCodeMutation } from "./mutations/PostalCode";
import { selectPrefectureMutation } from "./mutations/Prefecture";
import { registDestinationMutation } from "./mutations/Destination";

export default {
  [MUTATIONTYPE.WRITE_NAME]: writeNameMutation,
  [MUTATIONTYPE.WRITE_CITYSTREET]: writeCityStreetMutation,
  [MUTATIONTYPE.WRITE_POSTALCODE]: writePostalCodeMutation,
  [MUTATIONTYPE.SELECT_PREFECTURE]: selectPrefectureMutation,
  [MUTATIONTYPE.REGIST_DESTINATION]: registDestinationMutation
};
