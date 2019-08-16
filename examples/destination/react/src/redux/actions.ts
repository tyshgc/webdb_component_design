/**
 * Redux Actions
 */
import actionCreatorFactory from "typescript-fsa";
import { ACTION_TYPES } from "./actionTypes";

// Types
import {
  typeNamePayload,
  typePostalCodePayload,
  typePrefecturePayload,
  typeCityStreetPayload
} from "destination";

const actionCreator = actionCreatorFactory("destination");

// 名前を記入する
const writeNameAction = actionCreator<typeNamePayload>(ACTION_TYPES.WRITE_NAME);

// 郵便番号を記入する
const writePostalCodeAction = actionCreator<typePostalCodePayload>(
  ACTION_TYPES.WRITE_POSTALCODE
);

// 都道府県を選択する
const selectPrefectureAction = actionCreator<typePrefecturePayload>(
  ACTION_TYPES.SELECT_PREFECTURE
);

// 住所（市区町村・番地以下）を記入する
const writeCityStreetAction = actionCreator<typeCityStreetPayload>(
  ACTION_TYPES.WRITE_CITYSTREET
);

// 宛先を登録する
const registDestinationAction = actionCreator(ACTION_TYPES.REGIST_DESTINATION);

export default {
  writeNameAction,
  writePostalCodeAction,
  selectPrefectureAction,
  writeCityStreetAction,
  registDestinationAction
};
