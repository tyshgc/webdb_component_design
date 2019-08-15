export interface typeName {
  firstName?: string;
  lastName?: string;
}
export type typeFullName = string;
export enum NAME_TYPE {
  FIRST_NAME,
  LAST_NAME
}
export type typeNamePayload = {
  name: typeName["firstName"] | typeName["lastName"];
  type: NAME_TYPE;
};
export type typeNameEvent = (
  name: typeName["firstName"] | typeName["lastName"],
  type: NAME_TYPE
) => void;
