import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import carReducer from "./carReducer";


const rootReducer = (history) =>
  combineReducers({
    router: routerReducer(history),
    cars:carReducer
  });
// const rootReducer = combineReducers({
//   router: routerReducer(),
//   alert: AlertReducer,
// });

export default rootReducer;