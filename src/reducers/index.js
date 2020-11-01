import { combineReducers } from "redux";
import counterReducer from "./counter";
import todosReducer from "./todo";
import performance from "./performance";

const reducers = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  performance,
});

export default reducers;
