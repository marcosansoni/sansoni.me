import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';

const Box = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  transform: rotate(90deg);
  animation: rotating 3s forwards;
  //
  @keyframes rotating {
    0% {
      //opacity: 0;
      transform: rotate(90deg);
    }
    //25%{
    //  opacity: 0;
    //}
    to {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
`;

const Circle = styled.div`
  width: 250px;
  height: 250px;
  font-size: 16px;
  background-color: transparent;
  border-top-left-radius: 250px;
  border-top-right-radius: 0;
  border: 10px solid transparent;
  border-bottom: 0;
  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(-90deg);

`;

const First = styled.div`
  position: absolute;
  bottom: 0;
  width: 428px;
  border-bottom: 1px solid black;
  left: 0;
  margin-left: 25px;
  transform: rotate(25deg);
`;

const Second = styled.div`
  position: absolute;
  bottom: 0;
  width: 434px;
  border-bottom: 1px solid black;
  left: 0;
  margin-left: 25px;
  transform: rotate(45deg);
`;

const Third = styled.div`
  position: absolute;
  bottom: 0;
  width: 440px;
  border-bottom: 1px solid black;
  left: 0;
  margin-left: 25px;
  transform: rotate(65deg);
`;

const Container = styled.div`
  position: fixed;
  right: -250px;
  top: -250px;
  //left:80px;
  //top:0;
  //width: 100%;
  //display: flex;
  //justify-content: flex-end;
`;

// const CircleHamburger = styled.div`
//   width: 220px;
//   height: 220px;
//   border-radius: 100%;
//   background-color: white;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 2;
//   display: flex;
//   align-items: flex-end;
//   justify-content: flex-start;
// `;

const CircleHamburger = styled.div`
  position: fixed;
  top: -110px;
  right: -110px;
  width: 220px;
  height: 220px;
  border-radius: 100%;
  background-color: white;
  z-index: 1;
`;

const ContainerHamburger = styled.div`
  position: relative;
  background-color: white;
  width: 60px;
  height: 48px;
  margin-top: 120px;
  margin-left: 36px;
  z-index: 2;
`;

const NavigationMenu = () => (
  <Container>
    <CircleHamburger>
      <ContainerHamburger>
        <Hamburger />
      </ContainerHamburger>
    </CircleHamburger>
    <Box>
      {/* <CircleHamburger /> */}
      <Circle>
        <First>ABOUT</First>
        <Second>WORK</Second>
        <Third>EDUCATION</Third>
      </Circle>
    </Box>
  </Container>
);
export default NavigationMenu;
