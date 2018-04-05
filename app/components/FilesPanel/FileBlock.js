import React from "react";
import moment from "moment";

import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

function FileBlock(props) {
  const {
    authorizedBy,
    documentData,
    documentId,
    validity,
    approved,
    validatedBy
  } = props;

  return (
    <Card>
      <CardContent>
        <Typography component="h3" color="primary">
          <strong>{documentId}</strong>
        </Typography>
        <Typography component="h3" color="textSecondary">
          <strong>{validity}</strong>
        </Typography>
        <Typography
          component={approved === true || approved === false ? "h3" : null}
          color="textSecondary"
        >
          {`Authorized by ${authorizedBy}`}
        </Typography>
        {approved === true || approved === false ? (
          <Typography color="textSecondary">
            <strong>
              {`This file was marked as ${
                approved ? "valid" : "invalid"
              } by ${validatedBy}`}
            </strong>
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default FileBlock;
