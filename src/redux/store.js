import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import isConnectReducer from "./../redux/isConnect/isConnectReducer";

const rootReducer = combineReducers({
  isConnectReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
