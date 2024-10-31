import { combineReducers } from "redux";
import studentReducer from "./studentReducer";

const rootReducer=combineReducers({
    studentData :studentReducer
})
export default rootReducer