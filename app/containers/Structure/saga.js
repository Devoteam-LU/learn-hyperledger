import {
  call,
  put,
  takeEvery,
  takeLatest,
  select
} from "redux-saga/effects";
import {
  submitForm
} from "api/fileApi";
import {
  getTransactions
} from "api/transactionsApi";

import {
  submitFormResponseAction,
  getTransactionsRequestAction,
  getTransactionsResponseAction
} from "./actions";
import {
  SUBMIT_FORM_REQUEST_ACTION,
  GET_TRANSACTIONS_REQUEST_ACTION
} from "./constants";
import {
  selectFilename,
  selectFileValidity,
  selectFileData
} from "./selectors";

export function* submitFormSaga(action) {
  try {
    const filename = yield select(selectFilename());
    const fileValidity = yield select(selectFileValidity());
    const fileData = yield select(selectFileData());
    const response = yield call(submitForm, {
      filename,
      fileValidity,
      fileData
    });
    yield put(submitFormResponseAction(response));
    yield put(getTransactionsRequestAction());
  } catch (err) {
    yield put(submitFormResponseAction());
  }
}

export function* getTransactionsSaga(action) {
  try {
    let response = yield call(getTransactions);
    response.sort(function (a, b) {
      var timestampA = a.transactionTimestamp
      var timestampB = b.transactionTimestamp
      if (timestampA < timestampB) {
        return 1;
      }
      if (timestampA > timestampB) {
        return -1;
      }
      return 0;
    });
    yield put(getTransactionsResponseAction(response));
  } catch (err) {
    yield put(getTransactionsResponseAction());
  }
}

export default function* homePageSagaWatcher() {
  yield takeLatest(SUBMIT_FORM_REQUEST_ACTION, submitFormSaga);
  yield takeLatest(GET_TRANSACTIONS_REQUEST_ACTION, getTransactionsSaga);
}
