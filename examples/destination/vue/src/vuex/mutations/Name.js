/**
 * 宛先の住所（市区町村・番地以下）に関するMutation
 */
import { NAME_TYPE } from "@/enum";

export const writeNameMutation = (state, payload) => {
    if (!payload) return;
    
    switch (payload.type) {
        case NAME_TYPE.FIRST_NAME:
            state.editDestination.name.firstName = payload.name;
        break;
        case NAME_TYPE.LAST_NAME:
            state.editDestination.name.lastName = payload.name;
        break;
    }
};