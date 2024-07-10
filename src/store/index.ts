import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryActions, categoryReducer, CategoryState } from "./slices/category.slices";

export type StoreType = {
  categoryStore: CategoryState;
  
};
const rootReducer = combineReducers({
  categoryStore: categoryReducer,
  
});
const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(categoryActions.findAllThunk());
export default store;