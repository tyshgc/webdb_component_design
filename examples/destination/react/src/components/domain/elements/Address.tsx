/**
 * Address Domain Element Component
 */
import React from "react";

// Components
import { TextFieldGroup } from "../../gui/groups";
import { FieldBlockWrapper, SelectBox } from "../../gui/parts";

// Types
import { typeCityStreet } from "../../../types/CityStreet";
import { typePrefecture } from "../../../types/Prefecture";
import { typeAddress } from "../../../types/Address";

// Contains
import { prefectures } from "../../../prefectures";
enum LABELS {
  ALL = "住所",
  PREFECTURE = "都道府県を選択",
  CITY_STREET = "市区町村・番地を入力"
}

/**
 * 宛先の住所表示コンポーネント
 * Display Address Domain Element Component
 * @address 都道府県 + 市区町村 + 町名・番地など
 */
interface Props {
  address?: typeAddress;
}

export const Address = (props: Props) => {
  const { address } = props;
  const addressString = address ? (
    <strong>{address}</strong>
  ) : (
    <span>未記入</span>
  );

  return (
    <FieldBlockWrapper heading={LABELS.ALL}>{addressString}</FieldBlockWrapper>
  );
};

/**
 * 宛先の名前編集コンポーネント
 * Edit Name Domain Element Component
 * @prefecture 都道府県
 * @cityStreet 市区町村 + 町名・番地など
 * @onCityStreetChanged 宛先の住所を変更する際の入力イベント
 * @onSelectedPrefecture 都道府県の選択イベント
 */
interface EditProps {
  prefecture?: typePrefecture;
  cityStreet?: typeCityStreet;
  onSelectedPrefecture?: (choice: typePrefecture) => void;
  onCityStreetChanged?: (cityStreetValue: typeCityStreet) => void;
}
export const AddressEdit = (props: EditProps) => {
  const {
    prefecture,
    cityStreet,
    onCityStreetChanged,
    onSelectedPrefecture
  } = props;

  const onChanged = (res: React.BaseSyntheticEvent) => {
    if (!onCityStreetChanged) return;
    const cityStreetValue = res.target.value;
    onCityStreetChanged(cityStreetValue);
  };

  const onSelected = (res: React.BaseSyntheticEvent) => {
    if (!onSelectedPrefecture) return;
    const choice = res.target.value;
    onSelectedPrefecture(choice);
  };

  return (
    <>
      <FieldBlockWrapper heading={LABELS.PREFECTURE}>
        <SelectBox
          choices={prefectures}
          selected={prefecture}
          onSelected={onSelected}
        />
      </FieldBlockWrapper>
      <FieldBlockWrapper heading={LABELS.CITY_STREET}>
        <TextFieldGroup defaultValue={cityStreet} onChanged={onChanged} />
      </FieldBlockWrapper>
    </>
  );
};
