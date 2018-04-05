import React from "react";

import VisualPanelContainer from "./VisualPanelContainer";
import Block from "./Block";

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
