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
  selectMenuChildren
} from "./selectors";
import {
  addFileAction,
  updateFieldAction,
  submitFormRequestAction,
  toggleMenuAction,
  changeUserAction
} from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import Menu, { MenuItem } from "material-ui/Menu";

import Layout from "components/Layout";

export class Structure extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, anchor, menuChildren, ...rest } = this.props;
    return (
      <Layout {...rest}>
        <Menu
          id="mui-menu"
          anchorEl={anchor}
          open={Boolean(anchor)}
          onClose={() => rest.toggleMenu()}
        >
          {menuChildren.map(child => (
            <MenuItem key={child.label} onClick={child.onClick}>
              {child.label}
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
  menuChildren: selectMenuChildren()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    changeUser: user => dispatch(changeUserAction(user)),
    addFile: (file, fileData) => dispatch(addFileAction(file, fileData)),
    updateField: (field, value) => dispatch(updateFieldAction(field, value)),
    submitForm: () => dispatch(submitFormRequestAction()),
    toggleMenu: (anchor, menuChildren) =>
      dispatch(toggleMenuAction(anchor, menuChildren))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: "structure", reducer });
const withSaga = injectSaga({ key: "structure", saga });

export default compose(withReducer, withSaga, withConnect)(Structure);
