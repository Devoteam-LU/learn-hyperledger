import sha256 from "crypto-js/sha256";

import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { submitForm, getFiles } from "api/fileApi";
import { getTransactions } from "api/transactionsApi";
import { validateFile } from "api/validationApi";

import {
  submitFormResponseAction,
  getTransactionsRequestAction,
  getTransactionsResponseAction,
  getFilesRequestAction,
  getFilesResponseAction,
  submitDecisionRequestAction,
  submitDecisionResponseAction,
  toggleLoadingAction
} from "./actions";
import {
  SUBMIT_FORM_REQUEST_ACTION,
  GET_TRANSACTIONS_REQUEST_ACTION,
  GET_FILES_REQUEST_ACTION,
  SUBMIT_DECISION_REQUEST_ACTION
} from "./constants";
import {
  selectFilename,
  selectFileValidity,
  selectFileData,
  selectUser,
  selectCurrentDocumentId,
  selectApprovalStatus,
  selectFiles
} from "./selectors";
import yellow from "material-ui/colors/yellow";

export function* submitFormSaga(action) {
  try {
    yield put(toggleLoadingAction());
    const filename = yield select(selectFilename());
    const fileValidity = yield select(selectFileValidity());
    const fileData = yield select(selectFileData());
    const user = yield select(selectUser());

    const response = yield call(submitForm, {
      user,
      filename,
      fileValidity,
      fileData: sha256(fileData).toString()
    });
    yield put(submitFormResponseAction(response));
    yield put(getTransactionsRequestAction());
    yield put(toggleLoadingAction());
  } catch (err) {
    yield put(submitFormResponseAction());
    yield put(toggleLoadingAction());
  }
}

export function* getTransactionsSaga(action) {
  try {
    yield put(toggleLoadingAction());
    let response = yield call(getTransactions);
    response.sort(function(a, b) {
      var timestampA = a.transactionTimestamp;
      var timestampB = b.transactionTimestamp;
      if (timestampA < timestampB) {
        return 1;
      }
      if (timestampA > timestampB) {
        return -1;
      }
      return 0;
    });
    yield put(getTransactionsResponseAction(response));
    yield put(getFilesRequestAction());
    yield put(toggleLoadingAction());
  } catch (err) {
    yield put(getTransactionsResponseAction());
  }
}

export function* getFilesSaga(action) {
  try {
    let response = yield call(getFiles);
    response.sort(function(a, b) {
      var documentIdA = a.documentId;
      var documentIdB = b.documentId;
      if (documentIdA < documentIdB) {
        return -1;
      }
      if (documentIdA > documentIdB) {
        return 1;
      }
      return 0;
    });
    yield put(getFilesResponseAction(response));
  } catch (err) {
    yield put(getFilesResponseAction());
  }
}

export function* submitDecisionSaga(action) {
  try {
    yield put(toggleLoadingAction());
    const files = yield select(selectFiles());
    const documentId = yield select(selectCurrentDocumentId());
    const isApproved = yield select(selectApprovalStatus());
    const user = yield select(selectUser());

    const response = yield call(validateFile, {
      user,
      documentId: files[documentId].documentId,
      isApproved
    });
    yield put(submitDecisionResponseAction(response));
    yield put(getTransactionsRequestAction());
    yield put(toggleLoadingAction());
  } catch (err) {
    yield put(submitDecisionResponseAction());
    yield put(toggleLoadingAction());
  }
}

export default function* homePageSagaWatcher() {
  yield takeLatest(SUBMIT_FORM_REQUEST_ACTION, submitFormSaga);
  yield takeLatest(GET_TRANSACTIONS_REQUEST_ACTION, getTransactionsSaga);
  yield takeLatest(GET_FILES_REQUEST_ACTION, getFilesSaga);
  yield takeLatest(SUBMIT_DECISION_REQUEST_ACTION, submitDecisionSaga);
}
