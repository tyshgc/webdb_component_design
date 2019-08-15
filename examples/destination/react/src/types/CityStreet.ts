// 住所（市区町村・番地以下）に関する型
export type typeCityStreet = string;
export type typeCityStreetPayload = {
  cityStreet: typeCityStreet;
};
export type typeCityStreetEvent = (cityStreet: typeCityStreet) => void;
