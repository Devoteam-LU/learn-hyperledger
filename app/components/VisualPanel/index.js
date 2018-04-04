import React from 'react';
import Block from './Block';

function VisualPanel(props) {
  const {transactions} = props
  return (
    <div>
      {transactions.map((blockData, i) => <Block key={i} {...blockData}/>)}
    </div>
  );
}

VisualPanel.propTypes = {

};

export default VisualPanel;
