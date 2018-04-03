import React from "react";

import { FormattedMessage } from "react-intl";
import Card from "material-ui/Card";

import messages from "./messages";
import Form from "./Form";

const FileUpload = props => {
  const { addFile, isValid, filename } = props;
  const getFile = file => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      addFile(file, reader.result);
    };
  };
  return (
    <Card>
      <Form valid={filename.length > 3 && isValid}>
        <input
          type="file"
          onChange={e => getFile(e.target.files[0])}
          value=""
        />
        <p>{filename || <FormattedMessage {...messages.upload} />}</p>
      </Form>
    </Card>
  );
};

export default FileUpload;
