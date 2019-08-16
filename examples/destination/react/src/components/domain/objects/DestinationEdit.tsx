/**
 * 宛先登録
 * Destination Edit Domain Object Component
 * @name 宛先の名前
 * @postalCode 郵便番号
 * @address 住所
 */
import React from "react";

// Components
import {
  AddressEdit,
  NameEdit,
  PostalCodeEdit,
  RegistrationButton
} from "../elements";
import { Layout } from "../../layouts";

// Types
import {
  typeName,
  typeNameEvent,
  typePostalCode,
  typePostalCodeEvent,
  typeCityStreet,
  typeCityStreetEvent,
  typePrefecture,
  typePrefectureEvent
} from "destination";

interface Props {
  name: {
    firstName?: typeName["firstName"];
    lastName?: typeName["lastName"];
    onChanged?: typeNameEvent;
  };
  postalCode: {
    upper?: typePostalCode["upper"];
    lower?: typePostalCode["lower"];
    onChanged?: typePostalCodeEvent;
  };
  address: {
    prefecture?: typePrefecture;
    cityStreet?: typeCityStreet;
    onCityStreetChanged: typeCityStreetEvent;
    onSelectedPrefecture: typePrefectureEvent;
  };
  onRegisted?: () => void;
}

export const DestinationEdit = (props: Props) => {
  const { name, postalCode, address, onRegisted } = props;
  const { firstName, lastName } = name;
  const { upper, lower } = postalCode;
  const { prefecture, cityStreet } = address;

  return (
    <>
      <Layout>
        <NameEdit onChanged={name.onChanged} {...{ firstName, lastName }} />
      </Layout>
      <Layout>
        <PostalCodeEdit
          onChanged={postalCode.onChanged}
          {...{ upper, lower }}
        />
      </Layout>
      <Layout>
        <AddressEdit
          onSelectedPrefecture={address.onSelectedPrefecture}
          onCityStreetChanged={address.onCityStreetChanged}
          {...{ prefecture, cityStreet }}
        />
      </Layout>
      <Layout>
        <RegistrationButton onRegisted={onRegisted} />
      </Layout>
    </>
  );
};
