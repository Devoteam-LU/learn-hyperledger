import React from "react";

import { FormControl } from "material-ui/Form";
import TextField from "material-ui/TextField";
import Select from "material-ui/Select";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Button from "material-ui/Button";

function Forms(props) {
  const {
    filename,
    fileValidity = "Unoriginal",
    updateField = () => {},
    submitForm = () => {},
    isValid = false
  } = props;

  const inputLabelProps = {
    shrink: true
  };

  return (
    <div className="cell grid-x grid-padding-y">
      <div className="cell" />
      <div className="cell">
        <TextField
          autoFocus
          label="Document name"
          value={filename}
          onChange={e => updateField("filename", e.target.value)}
          InputLabelProps={inputLabelProps}
          disabled={!isValid}
          fullWidth
        />
      </div>
      <div className="cell" />
      <FormControl className="cell grid-x">
        <InputLabel className="cell" shrink htmlFor="validity">
          File validity
        </InputLabel>
        <Select
          value={fileValidity}
          onChange={e => updateField("fileValidity", e.target.value)}
          inputProps={{
            id: "validity"
          }}
        >
          <MenuItem value="Original">Original</MenuItem>
          <MenuItem value="Unoriginal">Unoriginal</MenuItem>
        </Select>
      </FormControl>
      <div className="cell" />
      <div className="cell">
        <Button
          color="secondary"
          variant="raised"
          onClick={submitForm}
          fullWidth
          disabled={!filename || filename.length < 4}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}

Forms.propTypes = {};

export default Forms;
