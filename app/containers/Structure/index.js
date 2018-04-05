/**
 *
 * Structure
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectStructure, {
  selectUser,
  selectFilename,
  selectFileValidity,
  selectIsValid,
  selectTransactions,
  selectAnchor,
  selectMenuChildren,
  selectCurrentTab,
  selectCurrentDocumentId,
  selectApprovalStatus,
  selectFiles,
  selectIsLoadingActive
} from "./selectors";
import {
  addFileAction,
  updateFieldAction,
  submitFormRequestAction,
  toggleMenuAction,
  changeUserAction,
  getTransactionsRequestAction,
  changeTabAction,
  submitDecisionRequestAction
} from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import Menu, { MenuItem } from "material-ui/Menu";

import Layout from "components/Layout";
import Loading from "components/Loading";

export class Structure extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const { getTransactions } = this.props;
    getTransactions();
  }

  render() {
    const {
      children,
      anchor,
      menuChildren,
      changeUser,
      isLoadingActive,
      ...rest
    } = this.props;

    return (
      <Layout {...rest}>
        <Loading active={isLoadingActive} />
        <Menu
          id="mui-menu"
          anchorEl={anchor}
          open={Boolean(anchor)}
          onClose={() => rest.toggleMenu()}
        >
          {menuChildren.map(child => (
            <MenuItem
              key={child.user}
              onClick={() => {
                changeUser(child.user);
                rest.toggleMenu();
              }}
            >
              Switch to user {child.label}
            </MenuItem>
          ))}
        </Menu>
        {React.cloneElement(children, { ...rest })}
      </Layout>
    );
  }
}

Structure.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: selectUser(),

  structure: makeSelectStructure(),
  filename: selectFilename(),
  fileValidity: selectFileValidity(),
  isValid: selectIsValid(),
  transactions: selectTransactions(),
  anchor: selectAnchor(),
  menuChildren: selectMenuChildren(),
  currentTab: selectCurrentTab(),
  currentDocumentId: selectCurrentDocumentId(),
  approvalStatus: selectApprovalStatus(),

  files: selectFiles(),

  isLoadingActive: selectIsLoadingActive()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    changeUser: user => dispatch(changeUserAction(user)),
    addFile: (file, fileData) => dispatch(addFileAction(file, fileData)),
    updateField: (field, value) => dispatch(updateFieldAction(field, value)),
    submitForm: () => dispatch(submitFormRequestAction()),
    toggleMenu: (anchor, menuChildren) =>
      dispatch(toggleMenuAction(anchor, menuChildren)),
    getTransactions: () => dispatch(getTransactionsRequestAction()),
    changeTab: value => dispatch(changeTabAction(value)),
    submitDecision: () => dispatch(submitDecisionRequestAction())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: "structure", reducer });
const withSaga = injectSaga({ key: "structure", saga });

export default compose(withReducer, withSaga, withConnect)(Structure);
