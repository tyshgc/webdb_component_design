/**
 * 宛先の郵便番号に関するMutation
 */
import { POSTALCODE_TYPE } from "@/enum";

export const writePostalCodeMutation = (state, payload) => {
    if (!payload) return;
    
    switch (payload.type) {
        case POSTALCODE_TYPE.UPPER:
            state.editDestination.postalCode.upper = payload.code;
        break;
        case POSTALCODE_TYPE.LOWER:
            state.editDestination.postalCode.lower = payload.code;
        break;
    }
}