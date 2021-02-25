import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: block;

  rect {
    // stroke-dasharray: ${(p) => `${p.length}px`};
    // stroke-dashoffset: ${(p) => `${p.length}px`};
     stroke-dashoffset: 180px;
     stroke-dasharray: 180px;
    stroke-width: 1;
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

const Test = () => {
  console.log('Test');

  const width = 220;
  const height = 330;

  return (
    <Container length={width * 2 + height * 2}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <rect width={width} height={height} stroke="black" strokeWidth="4" fill="transparent" />
      </svg>
      <Content>
        Ciao
      </Content>
    </Container>

  );
};

export default Test;
