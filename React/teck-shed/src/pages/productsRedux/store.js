import { createStore, combineReducers } from "redux";
import productsReducer from "./reducer";
import { categoryReducer } from "./categoryReducer";
import { productDetailsReducer } from "./productDetailsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  productDetails: productDetailsReducer,
});

export const store = createStore(rootReducer);