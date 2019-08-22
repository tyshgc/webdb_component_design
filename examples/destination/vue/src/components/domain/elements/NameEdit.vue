<template>
    <field-block-wrapper :heading="FIELDNAME.NAME">
      <layout>
        <text-field-group
          :inline-label="FIELDNAME.LASTNAME"
          :default-value="lastName"
          :on-changed="onLastNameChanged"
        />
      </layout>
      <layout>
        <text-field-group
          :inline-label="FIELDNAME.FIRSTNAME"
          :default-value="firstName"
          :on-changed="onFirstNameChanged"
        />
      </layout>
    </field-block-wrapper>
</template>

<script>
/**
 * 宛先の名前編集コンポーネント
 * Edit Name Domain Element Component
 * @name 宛先の名前
 * @onChanged 宛先の名前を変更する際の入力イベント
 */

// Utils
import { canChangeEvent } from "@/utils/canChangeEvent";

// Components
import { TextFieldGroup } from "@/components/gui/groups"
import { FieldBlockWrapper } from "@/components/gui/parts";
import { Layout } from "@/components/layouts";

// Enum
import { NAME_TYPE } from "@/enum";

// Constants
import CONSTANTS from "@/constants";

export default {
    name: "NameEdit",
    mixins: [CONSTANTS],
    props: {
        firstName: String,
        lastName: String,
        onChanged: Function
    },
    methods: {
      onFirstNameChanged(res) {
        if (!canChangeEvent(this.onChanged, res)) return;
        this.onChanged(res, NAME_TYPE.FIRST_NAME);
      },
      onLastNameChanged(res) {
        if (!canChangeEvent(this.onChanged, res)) return;
        this.onChanged(res, NAME_TYPE.LAST_NAME);
      }
    },
    components: {
        FieldBlockWrapper,
        TextFieldGroup,
        Layout
    }
}
</script>