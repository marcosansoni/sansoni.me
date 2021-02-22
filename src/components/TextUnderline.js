import React from 'react';
import styled from 'styled-components';
import Color from '../assets/theme/Color';

const Container = styled.span`
  position: relative;
  font-size: 32px; 
  
  ::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 16px;
    background: ${Color.DARK_ORANGE};
    bottom: 32px;
    transition: all 0.2s ease-out;
  }
  
  :hover::before {
    transform: translateY(11px);
  }
  
  :hover {
    p {
      background-position: 0 8px;
    }
  }
`;

const Text = styled.p`
  cursor: pointer;
  position: relative;
  display: inline-block;
  background: ${`linear-gradient(to bottom, ${Color.BLACK}, ${Color.BLACK} 60%, ${Color.WHITE} 60%, ${Color.WHITE} 100%)`};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-repeat: no-repeat;
  transition: background 0.2s ease-out;
  white-space: nowrap;
`;

const Content = styled.div`
  display: flex;
`;

const TextUnderline = () => {
  console.log('Text');
  return (
    <Content>
      <Container>
        <Text>
          Hello world
        </Text>
      </Container>
    </Content>
  );
};

export default TextUnderline;
