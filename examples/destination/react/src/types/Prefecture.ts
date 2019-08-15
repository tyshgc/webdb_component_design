// 都道府県に関する型
export type typePrefecture = string;
export type typePrefecturePayload = {
  choice: typePrefecture;
};
export type typePrefectureEvent = (choice: typePrefecture) => void;
