import React from "react";
import CodePanelContainer from "./CodePanelContainer";
import Prism from "prismjs";

function CodePanel(props) {
  const { transactions } = props;
  const markup = {
    __html: Prism.highlight(
      JSON.stringify(transactions, null, "\t"),
      Prism.languages.javascript,
    )
  };

  return (
    <CodePanelContainer>
      <code className="language-javascript" dangerouslySetInnerHTML={markup} />
    </CodePanelContainer>
  );
}

CodePanel.propTypes = {};

export default CodePanel;
