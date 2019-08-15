/**
 * 宛先の郵便番号コンポーネント
 * PostalCode Domain Element Component
 */
import React from "react";
import styled from "styled-components";

// Components
import { LayoutFlex, LayoutFlexItem } from "../../layouts";
import { FieldBlockWrapper, TextField } from "../../gui/parts";

// Types
import {
  POSTALCODE_TYPE,
  typePostalCodeEvent,
  typePostalCode,
  typePostalCodeAll
} from "../../../types/PostalCode";

// Constants
const LABEL = "郵便番号";

/**
 * 宛先の郵便番号表示コンポーネント
 * Display PostalCode Domain Element Component
 * @upper 宛先の郵便番号 上三桁
 * @lower 宛先の郵便番号 下四桁
 */
interface Props {
  code?: typePostalCodeAll;
}

export const PostalCode = (props: Props) => {
  const { code } = props;
  const postalCodeString = code ? <strong>{code}</strong> : <span>未記入</span>;
  return (
    <FieldBlockWrapper heading={LABEL}>{postalCodeString}</FieldBlockWrapper>
  );
};

/**
 * 宛先の郵便番号編集コンポーネント
 * Edit PostalCode Domain Element Component
 * @upper 宛先の郵便番号 上三桁
 * @lower 宛先の郵便番号 下四桁
 * @onChanged 宛先の郵便番号変更の際の入力変更イベント
 */
// todo: hooksが必要
interface EditProps {
  upper?: typePostalCode["upper"];
  lower?: typePostalCode["lower"];
  onChanged?: typePostalCodeEvent;
}
export const PostalCodeEdit = (props: EditProps) => {
  const { upper, lower, onChanged } = props;

  const onUpperChanged = (res: React.BaseSyntheticEvent) => {
    if (!onChanged) return;

    const postalCodeValue = res.target.value;
    onChanged(postalCodeValue, POSTALCODE_TYPE.UPPER);
  };

  const onLowerChanged = (res: React.BaseSyntheticEvent) => {
    if (!onChanged) return;

    const postalCodeValue = res.target.value;
    onChanged(postalCodeValue, POSTALCODE_TYPE.LOWER);
  };

  return (
    <FieldBlockWrapper heading={LABEL}>
      <LayoutFlex>
        <LayoutFlexItem>
          <StyledPostalCodeUpper
            defaultValue={upper}
            onChanged={onUpperChanged}
          />
        </LayoutFlexItem>
        <LayoutFlexItem>-</LayoutFlexItem>
        <LayoutFlexItem>
          <StyledPostalCodeLower
            defaultValue={lower}
            onChanged={onLowerChanged}
          />
        </LayoutFlexItem>
      </LayoutFlex>
    </FieldBlockWrapper>
  );
};

const StyledPostalCodeUpper = styled(TextField)``;
const StyledPostalCodeLower = styled(TextField)``;
