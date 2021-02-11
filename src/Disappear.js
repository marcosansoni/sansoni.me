import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import loading from './lottie/loading.json';
import backgroundSVG from './image/background.svg';

const Container = styled.div`
  position: fixed;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  border: 8px solid black;
  //background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundSVG});
  //animation-delay: 3s;
  //animation: colorChange 2s forwards;
  //
  //
  //@keyframes colorChange {
  //0% {
  //    width: 100vw;
  //    height: 100vh;
  //    background-color: black;
  //  }
  //  
  //  100% {
  //    width: 100vw;
  //    height: 100vh;
  //    background-color: white;
  //    background-image: url("./image/background.svg");
  //  }
  // }
`;

const Hi = styled.div`
  margin: 8px;
  color: black;
  font-family: "Gordita Bold", sans-serif;
  font-size: 96px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: resize 3s linear;
  animation-fill-mode: forwards;
  
  @keyframes resize {
    0% {
      width: ${(p) => `${p.sizeFrom}px`};
      height: ${(p) => `${p.sizeFrom}px`};
      font-size: ${(p) => `${p.sizeFrom / 3}px`};
    }
  
    100% {
      width: ${(p) => `${p.sizeTo}px`};
      height: ${(p) => `${p.sizeTo}px`};
      font-size: ${(p) => `${p.sizeTo / 3}px`};
    }
}
  
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 8px;
  height: calc(100vh - 32px);
  //height: calc(var(--vh, 1vh) * 100);
  width: 4px;
  background-color: white;
  animation: resizeVertical 3s linear;
  animation-fill-mode: forwards;
  
  @keyframes resizeVertical {
    0% {
      left: ${(p) => `${p.sizeFrom + 4}px`};
    }
    
    100% {
      left: ${(p) => `${p.sizeTo + 4}px`};
    }
`;

const HorizontalLine = styled.div`
  position: absolute;
  left: 8px;
  width: calc(100vw - 32px);
  height: 4px;
  background-color: white;
  animation: resizeHorizontal 3s linear;
  animation-fill-mode: forwards;
  
  @keyframes resizeHorizontal {
    0% {
      top: ${(p) => `${p.sizeFrom + 4}px`};
    }
    
    100% {
      top: ${(p) => `${p.sizeTo + 4}px`};
    }
`;

const Content = styled.div`
  position: absolute;
  top: ${(p) => `${p.size + 8}px`};
  left: ${(p) => `${p.size + 8}px`};
  width: ${(p) => `calc(100vw - ${p.size + 32}px)`};
  height: ${(p) => `calc(100vh - ${p.size + 32}px)`};
  background-color: red;
  padding: 8px;
  visibility: hidden;
  animation: showAfterResize 0s 3s forwards;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  
  @keyframes showAfterResize {
    0% {
      visibility: hidden;
    }
    
    100% {
      visibility: visible;
    }
`;

// const BubbleContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: black;
//   animation: increase 2s forwards;
//   position: absolute;
//   animation-delay: 5s;
//
//   @keyframes increase {
//     0% {
//       width: 100vw;
//       height: 100vh;
//       background-color: black;
//     }
//
//     100% {
//       width: 100vw;
//       height: 100vh;
//       background-color: white;
//     }
// `;

const Line = styled.div`
  
`;

const Loading = styled.div`
  animation: cancel 3s forwards;
  
  @keyframes cancel {
    0% {
      visibility: visible;
    }
    
    100% {
      visibility: hidden;
    }
`;

const Disappear = () => {
  const width = 350;
  const height = 350;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      {/* <Hi sizeFrom={sizeFromHi} sizeTo={sizeToHi}>Hi</Hi> */}
      {/* <VerticalLine sizeFrom={sizeFromHi} sizeTo={sizeToHi} /> */}
      {/* <HorizontalLine sizeFrom={sizeFromHi} sizeTo={sizeToHi} /> */}
      {/* <Content size={sizeToHi}> */}
      {/*  I'm Marco Sansoni. <br /> An italian Front End Developer */}
      {/* </Content> */}

      <Loading>
        <Lottie options={defaultOptions} height={height} width={width} />
      </Loading>
      <Line />
    </Container>
  );
};

export default Disappear;
