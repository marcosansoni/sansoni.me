import PropTypes from 'prop-types';
import React from 'react';
import CursorContext from './CursorContext';

const CursorProvider = (props) => {
  const { ref, children } = props;

  console.log(ref);

  const context = { ref };

  return (
    <CursorContext.Provider value={context}>{children}</CursorContext.Provider>
  );
};

CursorProvider.propTypes = {
  children: PropTypes.node.isRequired,
  ref: PropTypes.any.isRequired,
};

export default CursorProvider;
