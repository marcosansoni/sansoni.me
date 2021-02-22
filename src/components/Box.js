import React, { forwardRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const GlobalStyle = createGlobalStyle`
  #boxContainer {
    display: block !important;
  }
`;

const Container = styled.div`
  position: relative;
  display: none;

  #box path:nth-child(1) {
    stroke-dasharray: ${(p) => `${p.length}px`};
    stroke-dashoffset: ${(p) => `${p.length}px`};
    animation: lineAnimation 4s forwards;
    stroke-width: 1;
  }

  @keyframes lineAnimation {
    to {
      stroke-dashoffset: 0;
      stroke-width: 4;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 4px;
`;

const Box = forwardRef((props, ref) => {
  const { children, width, height } = props;

  return (
    <>
      <GlobalStyle />
      <Container length={width * 2 + height * 2} ref={ref}>
        <svg id="box" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="white" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M563 4H4V481H563V4ZM0 0V485H567V0H0Z"
            stroke="black"
          />
        </svg>
        <Content>
          {children}
        </Content>
      </Container>
    </>
  );
});

Box.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.element,
};

Box.defaultProps = {
  width: 567,
  height: 485,
  children: undefined,
};

export default Box;
