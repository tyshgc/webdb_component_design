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
  typePostalCodeEvent,
  typePostalCode,
  typePostalCodeAll
} from "destination";
import { POSTALCODE_TYPE } from "../../../enums";

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

// Constants
const FIELD_WIDTH_SIZES = {
  UPPER: "60px",
  SEPARATION: "12px",
  LOWER: "120px"
};

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
      <StyledWrapper>
        <LayoutFlex justify="start">
          <LayoutFlexItem column={FIELD_WIDTH_SIZES.UPPER}>
            <TextField
              defaultValue={upper}
              placeholder=" "
              onChanged={onUpperChanged}
              width={FIELD_WIDTH_SIZES.UPPER}
            />
          </LayoutFlexItem>
          <LayoutFlexItem column={FIELD_WIDTH_SIZES.SEPARATION}>
            <StyledSeparationBar>-</StyledSeparationBar>
          </LayoutFlexItem>
          <LayoutFlexItem column={FIELD_WIDTH_SIZES.LOWER}>
            <TextField
              defaultValue={lower}
              placeholder=" "
              onChanged={onLowerChanged}
              width={FIELD_WIDTH_SIZES.LOWER}
            />
          </LayoutFlexItem>
        </LayoutFlex>
      </StyledWrapper>
    </FieldBlockWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 80%;
  max-width: 240px;
`;
const StyledSeparationBar = styled.div`
  text-align: center;
`;
