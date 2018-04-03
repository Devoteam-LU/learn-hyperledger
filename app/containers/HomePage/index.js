import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

import FileUpload from "components/FileUpload";
import CodePanel from "components/CodePanel/Loadable";
import Forms from "components/Forms";

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { addFile, isValid, filename, transactions, ...rest } = this.props;
    return (
      <div className="grid-x grid-padding-x">
        <div className="auto cell grid-x">
          <div className="cell">
            <FileUpload
              isValid={isValid}
              addFile={addFile}
              filename={filename}
            />
            <Forms isValid={isValid} filename={filename} {...rest} />
          </div>
          <div className="cell">
            <h4>
              <FormattedMessage {...messages.intro} />
            </h4>
          </div>
        </div>
        <div className="auto cell">
          <CodePanel transactions={transactions} />
        </div>
      </div>
    );
  }
}
