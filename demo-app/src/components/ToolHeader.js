import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './ToolHeader.css';

export const ToolHeader = memo((props) => {

  return (
    <header className="tool-header">
      <h1>{props.headerText}</h1>
    </header>
  );

});

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};

ToolHeader.propTypes = {
  headerText: PropTypes.string,
};
