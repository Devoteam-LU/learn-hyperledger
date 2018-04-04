/*
 *
 * Structure actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_FILE_ACTION,
  UPDATE_FIELD_ACTION,
  SUBMIT_FORM_REQUEST_ACTION,
  SUBMIT_FORM_RESPONSE_ACTION,
  GET_TRANSACTIONS_REQUEST_ACTION,
  GET_TRANSACTIONS_RESPONSE_ACTION,
  TOGGLE_MENU_ACTION,
  CHANGE_TAB_ACTION
} from "./constants";

import { CHANGE_USER_RESPONSE_ACTION } from "containers/App/constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function addFileAction(file, fileData) {
  return {
    type: ADD_FILE_ACTION,
    file,
    fileData
  };
}

export function updateFieldAction(field, value) {
  return {
    type: UPDATE_FIELD_ACTION,
    field,
    value
  };
}

export function submitFormRequestAction() {
  return {
    type: SUBMIT_FORM_REQUEST_ACTION
  };
}

export function submitFormResponseAction() {
  return {
    type: SUBMIT_FORM_RESPONSE_ACTION
  };
}

export function getTransactionsRequestAction() {
  return {
    type: GET_TRANSACTIONS_REQUEST_ACTION
  };
}

export function getTransactionsResponseAction(transactions) {
  return {
    type: GET_TRANSACTIONS_RESPONSE_ACTION,
    transactions
  };
}

export function toggleMenuAction(anchor, menuChildren) {
  return {
    type: TOGGLE_MENU_ACTION,
    anchor,
    menuChildren
  };
}

export function changeUserAction(user) {
  return {
    type: CHANGE_USER_RESPONSE_ACTION,
    user
  };
}

export function changeTabAction(tab) {
  return {
    type: CHANGE_TAB_ACTION,
    tab
  };
}
