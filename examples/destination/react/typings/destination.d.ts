declare module "destination" {
  import { NAME_TYPE, POSTALCODE_TYPE } from "../enums";

  // 住所（都道府県 + 市区町村・番地以下）の型
  export type typeAddress = string;

  // 住所（市区町村・番地以下）に関する型
  export type typeCityStreet = string;
  export type typeCityStreetPayload = {
    cityStreet: typeCityStreet;
  };
  export type typeCityStreetEvent = (cityStreet: typeCityStreet) => void;

  //宛先の名前に関する型
  export interface typeName {
    firstName?: string;
    lastName?: string;
  }
  export type typeFullName = string;
  export type typeNamePayload = {
    name: typeName["firstName"] | typeName["lastName"];
    type: NAME_TYPE;
  };
  export type typeNameEvent = (
    name: typeName["firstName"] | typeName["lastName"],
    type: NAME_TYPE
  ) => void;

  // 郵便番号に関する型
  export interface typePostalCode {
    upper?: string;
    lower?: string;
  }
  export type typePostalCodeAll = string;
  export type typePostalCodePayload = {
    code: typePostalCode["upper"] | typePostalCode["lower"];
    type: POSTALCODE_TYPE;
  };
  export type typePostalCodeEvent = (
    code: typePostalCode["upper"] | typePostalCode["lower"],
    type: POSTALCODE_TYPE
  ) => void;

  // 都道府県に関する型
  export type typePrefecture = string;
  export type typePrefecturePayload = {
    choice: typePrefecture;
  };
  export type typePrefectureEvent = (choice: typePrefecture) => void;

  // 宛先に関する型
  export interface typeDestination {
    name?: typeName;
    postalCode?: typePostalCode;
    prefecture?: typePrefecture;
    cityStreet?: typeCityStreet;
  }

  // アプリケーションの状態に関する型
  export interface typeState {
    editDestination: typeDestination;
    destination: typeDestination;
  }
}
