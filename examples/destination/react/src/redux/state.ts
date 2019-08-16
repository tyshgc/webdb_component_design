/**
 * アプリケーションの状態
 */
import { typeState } from "destination";

export const initialState: typeState = {
  editDestination: {
    name: {
      firstName: "",
      lastName: ""
    },
    postalCode: {
      upper: "",
      lower: ""
    },
    prefecture: "",
    cityStreet: ""
  },
  destination: {
    name: {
      firstName: "八幡太郎",
      lastName: "鶴岡"
    },
    postalCode: {
      upper: "123",
      lower: "4567"
    },
    prefecture: "神奈川県",
    cityStreet: "鎌倉市雪ノ下2-1-13"
  }
};
