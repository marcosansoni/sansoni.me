import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import CursorContext from './CursorContext';

const CursorProvider = forwardRef((props, ref) => {
  const { children } = props;

  console.log(ref);

  const context = { ref };

  // console.log(document.querySelectorAll('div#cursor'));

  return (
    <CursorContext.Provider value={context}>{children}</CursorContext.Provider>
  );
});

CursorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CursorProvider;
