import React from "react";
import Block from "./Block";

import VisualPanelContainer from "./VisualPanelContainer";

function VisualPanel(props) {
  const { transactions } = props;
  return (
    <VisualPanelContainer>
      {transactions.map((blockData, i) => <Block key={i} {...blockData} />)}
    </VisualPanelContainer>
  );
}

VisualPanel.propTypes = {};

export default VisualPanel;
