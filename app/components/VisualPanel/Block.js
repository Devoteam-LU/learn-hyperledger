import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

const styles = {
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
    wordWrap: "break-word"
  }
};

function Block(props) {
  const {
    classes,
    transactionId,
    transactionInvoked,
    transactionTimestamp,
    transactionType
  } = props;

  console.log(props)

  return (
    <div>
      <Card>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {`Block ${transactionId} was created at ${transactionTimestamp}`}
          </Typography>
          <Typography component="h3" className={classes.pos} color="primary">
            <strong>{transactionType}</strong>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {transactionInvoked}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Block.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Block);
