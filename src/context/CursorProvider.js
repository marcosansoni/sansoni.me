import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import CursorContext from './CursorContext';

const CursorProvider = forwardRef((props, ref) => {
  const { children } = props;
  const context = { ref };

  return (
    <CursorContext.Provider value={context}>{children}</CursorContext.Provider>
  );
});

CursorProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CursorProvider;
