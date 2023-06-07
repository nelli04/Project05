import {combineReducers} from "redux";
import {appReducer} from "./reducer/app-reducer";
import {authReducer} from "./reducer/auth-reducer";
import {someReducer} from "./reducer/some-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    some: someReducer
})

// @ts-ignore
window.store = store;