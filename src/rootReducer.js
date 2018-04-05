import { combineReducers } from "redux";
import homeStore from "./features/Home/redux";

export default combineReducers({
  homeStore: homeStore
});
