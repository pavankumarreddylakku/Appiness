import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import loginReducer from "./login";
const allReducer = combineReducers({
       login:loginReducer,
       counter: CounterReducer,
});
export default allReducer;