import React from "react";

// Components
import { Layout } from "../../layouts";
import { TextFieldGroup } from "../../gui/groups";
import { FieldBlockWrapper } from "../../gui/parts";

// Types
import { typeName, typeFullName, typeNameEvent } from "destination";
import { NAME_TYPE } from "../../../enums";

// Constants
enum LABELS {
  FULLNAME = "名前",
  FIRSTNAME = "名",
  LASTNAME = "性"
}

/**
 * 宛先の名前表示コンポーネント
 * Name Domain Element Component
 * @name 宛先の名前
 */
interface Props {
  fullName?: typeFullName;
}

export const Name = (props: Props) => {
  const { fullName } = props;
  const nameString = fullName ? (
    <strong>{fullName}</strong>
  ) : (
    <span>未記入</span>
  );

  return (
    <FieldBlockWrapper heading={LABELS.FULLNAME}>
      {nameString}
    </FieldBlockWrapper>
  );
};

/**
 * 宛先の名前編集コンポーネント
 * Edit Name Domain Element Component
 * @name 宛先の名前
 * @onChanged 宛先の名前を変更する際の入力イベント
 */
interface EditProps {
  firstName?: typeName["firstName"];
  lastName?: typeName["lastName"];
  onChanged?: typeNameEvent;
}
export const NameEdit = (props: EditProps) => {
  const { firstName, lastName, onChanged } = props;

  const onFirstNameChanged = (res: React.BaseSyntheticEvent) => {
    if (!onChanged) return;

    const nameValue = res.target.value;
    onChanged(nameValue, NAME_TYPE.FIRST_NAME);
  };

  const onLastNameChanged = (res: React.BaseSyntheticEvent) => {
    if (!onChanged) return;

    const nameValue = res.target.value;
    onChanged(nameValue, NAME_TYPE.LAST_NAME);
  };

  return (
    <FieldBlockWrapper heading={LABELS.FULLNAME}>
      <Layout>
        <TextFieldGroup
          inlineLabel={LABELS.LASTNAME}
          defaultValue={lastName}
          onChanged={onLastNameChanged}
        />
      </Layout>
      <Layout>
        <TextFieldGroup
          inlineLabel={LABELS.FIRSTNAME}
          defaultValue={firstName}
          onChanged={onFirstNameChanged}
        />
      </Layout>
    </FieldBlockWrapper>
  );
};
