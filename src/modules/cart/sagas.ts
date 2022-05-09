import { AxiosResponse } from "axios";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import { IState } from "../../util/store";
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from "./actions";
import { ActionTypes } from "./types";

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  amount: number;
}

function* checkProductStock({ payload }: checkProductStockRequest) {
  const { product } = payload;

  const currentAmount: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)?.amount ??
      0
    );
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.amount > currentAmount) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(Number(product.id)));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
]);
