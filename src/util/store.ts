import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import cart from "../modules/cart/reducer";
import { ICartState } from "../modules/cart/types";
import rootReducer from "../modules/rootReducer";
import rootSaga from "../modules/rootSagas";

// import characterReducer from '../store/reducers/reducer';

// const reducer = {
//   // characters: characterReducer,
// };

const reducer = {
  // cart: [],
};

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// export const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);
export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
