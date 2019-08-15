import { typeName } from "./Name";
import { typePostalCode } from "./PostalCode";
import { typePrefecture } from "./Prefecture";
import { typeCityStreet } from "./CityStreet";

// 宛先に関する型
export interface typeDestination {
  name?: typeName;
  postalCode?: typePostalCode;
  prefecture?: typePrefecture;
  cityStreet?: typeCityStreet;
}
