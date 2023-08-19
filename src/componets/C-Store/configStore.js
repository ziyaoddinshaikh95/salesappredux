import { createStore, combineReducers } from "redux";
import { commonReducers } from "../R-Reducer/commonReducers";
import { todoReducer } from "../R-Reducer/todoReducer";

export const configStore = () => {
  const myStore = createStore(
    combineReducers({ commonReducers, todoReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
