import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveToLocal = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

function loadFromLocal() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const Token = (state = "", action) => {
  switch (action.type) {
    case "SetToken":
      return action.value;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  Token: Token,
});

//const load = loadFromLocal();
const store = createStore(
  allReducers, //load,
  composeEnhancer(applyMiddleware(thunk))
);

//store.subscribe(()=>saveToLocal(store.getState()));

export { store };
