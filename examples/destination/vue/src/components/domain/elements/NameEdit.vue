<template>
    <FieldBlockWrapper :heading="FIELDNAME.NAME">
      <div>
        <TextFieldGroup
          :inline-label="FIELDNAME.LASTNAME"
          :default-value="lastName"
          :on-changed="onLastNameChanged"
        />
      </div>
      <div>
        <TextFieldGroup
          :inline-label="FIELDNAME.FIRSTNAME"
          :default-value="firstName"
          :on-changed="onFirstNameChanged"
        />
      </div>
    </FieldBlockWrapper>
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
        TextFieldGroup 
    }
}
</script>