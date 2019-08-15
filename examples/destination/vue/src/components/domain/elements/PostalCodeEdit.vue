<template>
    <FieldBlockWrapper :heading="FIELDNAME.POSTALCODE">
      <LayoutFlex>
        <LayoutFlexItem>
          <StyledPostalCodeUpper>
            <TextField
              :default-value="upper"
              :on-changed="onUpperChanged"
            />
          </StyledPostalCodeUpper>
        </LayoutFlexItem>
        <LayoutFlexItem>-</LayoutFlexItem>
        <LayoutFlexItem>
          <StyledPostalCodeLower>
            <TextField
              :defaule-value="lower"
              :on-changed="onLowerChanged"
            />
          </StyledPostalCodeLower>
        </LayoutFlexItem>
      </LayoutFlex>
    </FieldBlockWrapper>
</template>

<script>
/**
 * 宛先の郵便番号表示コンポーネント
 * Display PostalCode Domain Element Component
 * @upper 宛先の郵便番号 上三桁
 * @lower 宛先の郵便番号 下四桁
 */
import styled from "vue-styled-components";

// Utils
import { canChangeEvent } from "@/utils/canChangeEvent";

// Components
import { LayoutFlex, LayoutFlexItem } from "@/components/layouts";
import { FieldBlockWrapper, TextField } from "@/components/gui/parts";

// Constants
import CONSTANTS from "@/constants";

// Enum
import { POSTALCODE_TYPE } from "@/enum";

// Styled
const StyledPostalCodeUpper = styled.div``;
const StyledPostalCodeLower = styled.div``;

export default {
    name: "PostalCodeEdit",
    mixins: [CONSTANTS],
    props: {
        upper: String,
        lower: String,
        onChanged: Function
    },
    methods: {
        onUpperChanged(res) {
            if (!canChangeEvent(this.onChanged, res)) return;
            this.onChanged(res, POSTALCODE_TYPE.UPPER);
        },
        onLowerChanged(res) {
            if (!canChangeEvent(this.onChanged, res)) return;
            this.onChanged(res, POSTALCODE_TYPE.LOWER);
        }
    },
    components: {
        LayoutFlex, 
        LayoutFlexItem,
        FieldBlockWrapper, 
        StyledPostalCodeUpper,
        StyledPostalCodeLower,
        TextField
    }
}
</script>