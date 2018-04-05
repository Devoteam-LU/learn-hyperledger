import React from "react";

import { FormControl } from "material-ui/Form";
import TextField from "material-ui/TextField";
import Select from "material-ui/Select";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Button from "material-ui/Button";

function Forms(props) {
  const {
    isAgent,
    filename,
    currentDocumentId = 0,
    approvalStatus = 0,
    fileValidity = "Unoriginal",
    updateField = () => {},
    submitForm = () => {},
    submitDecision = () => {},
    isValid = false,
    files = []
  } = props;

  const inputLabelProps = {
    shrink: true
  };

  return (
    <div className="cell grid-x grid-padding-y">
      <div className="cell" />
      {isAgent
        ? [
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
            </div>,
            <div className="cell" />,
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
                <MenuItem value="Certified">Certified</MenuItem>
                <MenuItem value="SimpleCopy">Simple Copy</MenuItem>
              </Select>
            </FormControl>,
            <div className="cell" />,
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
          ]
        : [
            <FormControl className="cell grid-x">
              <InputLabel className="cell" shrink htmlFor="documentToApprove">
                Document to approve
              </InputLabel>
              <Select
                value={currentDocumentId}
                onChange={e => updateField("currentDocumentId", e.target.value)}
                inputProps={{
                  id: "documentToApprove"
                }}
              >
                {files.map((file, index) => (
                  <MenuItem value={index}>{file.documentId}</MenuItem>
                ))}
              </Select>
            </FormControl>,
            <div className="cell" />,
            <FormControl className="cell grid-x">
              <InputLabel className="cell" shrink htmlFor="approvalStatus">
                Do you approve this file?
              </InputLabel>
              <Select
                value={approvalStatus}
                onChange={e => updateField("approvalStatus", e.target.value)}
                inputProps={{
                  id: "approvalStatus"
                }}
              >
                <MenuItem value={1}>Yes, I approve this file</MenuItem>
                <MenuItem value={0}>No, I do not</MenuItem>
              </Select>
            </FormControl>,
            <div className="cell">
              <Button
                color="secondary"
                variant="raised"
                onClick={submitDecision}
                fullWidth
                disabled={!files || files.length == 0}
              >
                Submit decision
              </Button>
            </div>
          ]}
    </div>
  );
}

Forms.propTypes = {};

export default Forms;
