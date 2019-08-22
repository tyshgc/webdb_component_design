<template>
    <field-block-wrapper :heading="FIELDNAME.POSTALCODE">
      <styled-wrapper>
        <layout-flex :justify="'start'">
          <layout-flex-item :column="fieldWidthSizes.UPPER">
            <textField
              :default-value="upper"
              :placeholder="' '"
              :on-changed="onUpperChanged"
              :width="fieldWidthSizes.UPPER"
            />
          </layout-flex-item>
          <layout-flex-item :column="fieldWidthSizes.SEPARATION">
            <StyledSeparationBar>-</StyledSeparationBar>
          </layout-flex-item>
          <layout-flex-item :column="fieldWidthSizes.LOWER">
            <text-field
              :defaule-value="lower"
              :placeholder="' '"
              :on-changed="onLowerChanged"
              :width="fieldWidthSizes.LOWER"
            />
          </layout-flex-item>
        </layout-flex>
      </styled-wrapper>
    </field-block-wrapper>
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
const FIELD_WIDTH_SIZES = {
  UPPER: "60px",
  SEPARATION: "12px",
  LOWER: "120px"
};
// Enum
import { POSTALCODE_TYPE } from "@/enum";

const StyledWrapper = styled.div`
  width: 80%;
  max-width: 240px;
`;
const StyledSeparationBar = styled.div`
  text-align: center;
`;

export default {
    name: "PostalCodeEdit",
    mixins: [CONSTANTS],
    props: {
        upper: String,
        lower: String,
        onChanged: Function
    },
    computed: {
      fieldWidthSizes() { 
        return FIELD_WIDTH_SIZES
      }
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
        TextField,
        StyledWrapper,
        StyledSeparationBar
    }
}
</script>