import React from 'react';

import FilesPanelContainer from "./FilesPanelContainer";
import FileBlock from "./FileBlock";


function FilesPanel(props) {
  const { files } = props;
  return (
    <FilesPanelContainer>
      {files.map((file, i) => <FileBlock key={i} {...file} />)}
    </FilesPanelContainer>
  );
}

FilesPanel.propTypes = {

};

export default FilesPanel;
