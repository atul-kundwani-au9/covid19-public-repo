import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer1 from "../Reducers/reducer1";
import Reducer2 from "../Reducers/reducerQuiz";
import reducer from "../Reducers/authReducer";

const rootReducer = combineReducers({
  countrydata: Reducer1,
  quiz: Reducer2,
  users: reducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
