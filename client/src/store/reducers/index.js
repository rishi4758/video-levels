import { combineReducers } from "redux";
import imageDataReducer from "./imageDataReducer";
export default combineReducers({ data: imageDataReducer });
