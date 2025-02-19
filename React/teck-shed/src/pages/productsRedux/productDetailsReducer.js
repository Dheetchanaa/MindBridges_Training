const initialState = {
  selectedProduct: null,
};
export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_PRODUCT":
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};  