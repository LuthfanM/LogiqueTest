// ** Reducers Imports
import music from "./music";
import general from "./general";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ music, general })

export default rootReducer
