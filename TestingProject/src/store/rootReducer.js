import { combineReducers } from "@reduxjs/toolkit";
import login  from "./Authmodule/login_slice";

const rootReducer = combineReducers({
    login:login
});
export default rootReducer;
