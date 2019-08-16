/**
 * 宛先参照（表示）
 * Destination Domain Object Component
 * @name 宛先の名前
 * @postalCode 郵便番号
 * @address 住所
 */

import React from "react";

// Components
import { Address, Name, PostalCode } from "../elements";
import { Layout } from "../../layouts";

// Types
import { typeFullName, typePostalCodeAll, typeAddress } from "destination";

interface Props {
  name?: typeFullName;
  postalCode?: typePostalCodeAll;
  address?: typeAddress;
}

export const Destination = (props: Props) => {
  const { name, postalCode, address } = props;

  return (
    <>
      <Layout>
        <Name fullName={name} />
      </Layout>

      <Layout>
        <PostalCode code={postalCode} />
      </Layout>

      <Layout>
        <Address address={address} />
      </Layout>
    </>
  );
};
