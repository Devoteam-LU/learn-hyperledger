import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";

import FileUpload from "components/FileUpload";
import CodePanel from "components/CodePanel/Loadable";
import VisualPanel from "components/VisualPanel/Loadable";
import FilesPanel from "components/FilesPanel/Loadable";
import Forms from "components/Forms";

import FileBlock from "components/FilesPanel/FileBlock"

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      addFile,
      isValid,
      filename,
      transactions,
      changeTab,
      currentTab,
      user,
      ...rest
    } = this.props;
    const isAgent = user && user.indexOf("Agent") > -1;
    return (
      <div className="grid-x grid-padding-x">
        <div className="auto cell grid-x">
          <div className="cell">
            {isAgent ? (
              <FileUpload
                isValid={isValid}
                addFile={addFile}
                filename={filename}
              />
            ) : <FileBlock {...rest.files[rest.currentDocumentId]}/>}
            <Forms
              isValid={isValid}
              filename={filename}
              {...rest}
              isAgent={isAgent}
            />
          </div>
          <div className="cell">
            <h4>
              <FormattedMessage {...messages.intro} />
            </h4>
          </div>
        </div>
        <div className="auto cell">
          <AppBar position="static" color="default">
            <Tabs
              value={currentTab}
              onChange={(e, value) => changeTab(value)}
              indicatorColor="primary"
              fullWidth
            >
              <Tab label="Blockchain data" />
              <Tab label="Files data" />
              <Tab label="Blockchain" />
              <Tab label="Files" />
            </Tabs>
          </AppBar>
          {currentTab === 0 && <CodePanel data={transactions} />}
          {currentTab === 1 && <CodePanel data={rest.files} />}
          {currentTab === 2 && <VisualPanel transactions={transactions} />}
          {currentTab === 3 && <FilesPanel files={rest.files} />}
        </div>
      </div>
    );
  }
}
