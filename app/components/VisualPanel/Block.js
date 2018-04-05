import React from "react";
import moment from "moment";

import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

function Block(props) {
  const {
    transactionId,
    transactionInvoked,
    transactionTimestamp,
    transactionType
  } = props;

  return (
    <Card >
      <CardContent>
        <Typography component="h3" color="primary">
          <strong>{transactionType}</strong>
        </Typography>
        <Typography component="h3" color="textSecondary">
          {`Block ${transactionId}`}
        </Typography>
        <Typography component="h3" color="textSecondary">
          {transactionInvoked}
        </Typography>
        <Typography color="textSecondary">
          {moment(transactionTimestamp).format("LL h:mm:ss:SSS A")}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Block;
