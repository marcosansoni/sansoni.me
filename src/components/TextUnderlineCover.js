import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../assets/theme/Color';

const Container = styled.span`
  //display: inline-flex;
  position: relative;
  //font-size: 32px;
  transition: color ease-out 0.3s;
  //overflow: hidden;

  // ::before {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   height: 4px;
  //   background: ${Color.DARK_ORANGE};
  //   transition: all 0.2s ease-out;
  //   z-index: -1;
  // }

  //:hover::before {
  //  height: 100%;
  //}
  
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
  z-index: -1;
`;

const TextUnderlineCover = (props) => {
  const { children, style, className } = props;
  return (
    <Container style={style} className={className}>
      {children}
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
