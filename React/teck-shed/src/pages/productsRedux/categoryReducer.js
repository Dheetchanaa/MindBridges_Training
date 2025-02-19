const initialState = {
    activeCategory: ""
  };
  export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_ACTIVE_CATEGORY":
        return { ...state, activeCategory: action.payload };
      default:
        return state;
    }
  };  