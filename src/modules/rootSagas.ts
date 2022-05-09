import { all } from "redux-saga/effects";
import cart from "./cart/reducer";

export default function* rootSaga(): any {
  return yield all([cart]);
}
