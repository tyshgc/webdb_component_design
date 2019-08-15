/**
 * アプリケーションの状態
 */
export const initialState = {
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

export const editDestination = {
  state: {
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
  }
} 

export const destination = {
  state: {
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
  },
  getters: {
    fullName: state => state.name? `${state.name.lastName}${state.name.firstName}` : undefined,
    postalCodeAll: state => state.postalCode? `${state.postalCode.upper}-${state.postalCode.lower}` : undefined,
    address: state => state.prefecture && state.cityStreet? `${state.prefecture}${state.cityStreet}` : undefined,
  }
}