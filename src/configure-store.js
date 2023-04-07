import { legacy_createStore as createStore } from "redux";
import { globalState } from "./store/reducer";

export const store = createStore(globalState);
