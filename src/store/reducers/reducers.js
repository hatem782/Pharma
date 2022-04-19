import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SetToken, SetUser } from "../keys/Users.keys";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const InitialUser = { token: "", user: null };
const User = (state = { ...InitialUser }, action) => {
  switch (action.type) {
    case SetToken():
      return { ...state, token: action.value };
    case SetUser():
      return { ...state, user: action.value };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  User: User,
});

//const load = loadFromLocal();
const store = createStore(
  allReducers, //load,
  composeEnhancer(applyMiddleware(thunk))
);
//store.subscribe(()=>saveToLocal(store.getState()));

export { store };

// const saveToLocal = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("state", serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// };

// function loadFromLocal() {
//   try {
//     const serializedState = localStorage.getItem("state");
//     if (serializedState === null) return undefined;
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// }
