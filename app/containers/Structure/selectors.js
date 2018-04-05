import { createSelector } from "reselect";

/**
 * Direct selector to the structure state domain
 */
const selectStructureDomain = state => state.get("structure");
const selectUserDomain = state => state.get("user");

const selectUser = () =>
  createSelector(selectUserDomain, substate => substate.get("user"));
/**
 * Other specific selectors
 */
const selectFilename = () =>
  createSelector(selectStructureDomain, substate => substate.get("filename"));
const selectFileValidity = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get("fileValidity")
  );
const selectIsValid = () =>
  createSelector(selectStructureDomain, substate => substate.get("isValid"));
const selectTransactions = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get("transactions")
  );
const selectFileData = () =>
  createSelector(selectStructureDomain, substate => substate.get("fileData"));
const selectAnchor = () =>
  createSelector(selectStructureDomain, substate => substate.get("anchor"));
const selectMenuChildren = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get("menuChildren")
  );
const selectCurrentTab = () =>
  createSelector(selectStructureDomain, substate => substate.get("currentTab"));

const selectCurrentDocumentId = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get("currentDocumentId")
  );
const selectApprovalStatus = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get("approvalStatus")
  );

const selectFiles = () =>
  createSelector(selectStructureDomain, substate => substate.get("files"));

/**
 * Default selector used by Structure
 */

const makeSelectStructure = () =>
  createSelector(selectStructureDomain, substate => substate.toJS());

export default makeSelectStructure;
export {
  selectStructureDomain,
  selectUser,
  selectFilename,
  selectFileValidity,
  selectFileData,
  selectIsValid,
  selectTransactions,
  selectAnchor,
  selectMenuChildren,
  selectCurrentTab,
  selectCurrentDocumentId,
  selectApprovalStatus,
  selectFiles
};
