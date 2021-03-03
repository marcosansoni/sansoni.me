import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../assets/theme/Color';

const Container = styled.span`
  position: relative;
  transition: color ease-out 0.3s;
  z-index: 2;
  :hover{
    
    div{
      height: 100%;
    }
    color: white;
  }
  
`;

const Underline = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px;
  background: ${Color.DARK_ORANGE};
  transition: all 0.2s ease-out;
  z-index: 1;
`;

const TextUnderlineCover = (props) => {
  const { children, style, className } = props;
  return (
    <Container style={style} className={className}>
      <span style={{ zIndex: 2 }}>{children}</span>
      <Underline />
    </Container>
  );
};

TextUnderlineCover.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

TextUnderlineCover.defaultProps = {
  children: 'Marco',
  style: undefined,
  className: undefined,
};

export default TextUnderlineCover;
