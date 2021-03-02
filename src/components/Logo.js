import React from 'react';
import styled from 'styled-components';
import Color from '../assets/theme/Color';
import { MediaQuerySelector } from '../utils/responsive';
import useCursorRef from '../context/useCursorRef';

const Box = styled.div`
  font-family: 'Pacifico', cursive;
  font-size: 32px;
  color: black;
  width: 72px;
  height: 72px;
  background-color: ${Color.WHITE};
  border: ${`4px solid ${Color.BLACK}`};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  
  ${MediaQuerySelector.MEDIUM} {
    font-size: 28px;
    width: 64px;
    height: 64px;
  };

  ${MediaQuerySelector.SMALL} {
    border: ${`2px solid ${Color.BLACK}`};
    font-size: 20px;
    width: 48px;
    height: 48px;
  };  
`;

const Logo = () => {
  const { handleLeave, handleHover } = useCursorRef();

  return (
    <Box
      onMouseEnter={() => handleHover('text')}
      onMouseLeave={() => handleLeave('text')}
    >
      M.
    </Box>
  );
};

export default Logo;
