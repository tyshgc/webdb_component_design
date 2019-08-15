// 郵便番号に関する型
export interface typePostalCode {
  upper?: string;
  lower?: string;
}
export type typePostalCodeAll = string;
export enum POSTALCODE_TYPE {
  UPPER,
  LOWER
}
export type typePostalCodePayload = {
  code: typePostalCode["upper"] | typePostalCode["lower"];
  type: POSTALCODE_TYPE;
};
export type typePostalCodeEvent = (
  code: typePostalCode["upper"] | typePostalCode["lower"],
  type: POSTALCODE_TYPE
) => void;
