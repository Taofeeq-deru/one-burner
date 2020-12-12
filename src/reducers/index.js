import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import sidenav from "./sidenav";
import thunk from "redux-thunk";

const middleWare = [thunk];

const allReducers = combineReducers({
  sidenav,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
