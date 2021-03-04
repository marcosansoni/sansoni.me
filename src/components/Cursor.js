import React, { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import CursorProvider from '../context/CursorProvider';
import Color from '../assets/theme/Color';

const GlobalStyle = createGlobalStyle`
  .link {
    border: ${`3px solid ${Color.DARK_ORANGE}`};
  }
  
  .big{
    width: 96px;
    height: 96px;
  }
  
  .text {
    background-color: ${Color.WHITE};
  }
  
  .noMix {
    mix-blend-mode: normal;
  }
`;

const Container = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  pointer-events: none;
  will-change: transform;
  mix-blend-mode: difference;
`;

const Circle = styled.div`
  width: 64px;
  height: 64px;
  margin-top: -50%;
  margin-left: -50%;
  border-radius: 50%;
  border: solid 1px rgba(227, 222, 193, 0.64);
  transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1),
  background-color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
  border-color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
  width 0.5s cubic-bezier(0.25, 1, 0.5, 1),
  height 0.5s cubic-bezier(0.25, 1, 0.5, 1);
`;

const speed = 0.4; // between 0 and 1

const Cursor = (props) => {
  const { children } = props;
  const cursorRef = useRef();
  const cursorCircleRef = useRef();

  const mouseX = useRef(-100); // mouse pointer's coordinates
  const mouseY = useRef(-100); // mouse pointer's coordinates
  const posX = useRef(0); // cursor's coordinates
  const posY = useRef(0); // cursor's coordinates

  useEffect(() => {
    const updateCoordinates = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener('mousemove', updateCoordinates);

    const getAngle = (diffX, diffY) => (Math.atan2(diffY, diffX) * 180) / Math.PI;

    const getSqueeze = (diffX, diffY) => {
      const distance = Math.sqrt((diffX ** 2) + (diffY ** 2));
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    };

    const updateCursor = () => {
      const diffX = Math.round(mouseX.current - posX.current);
      const diffY = Math.round(mouseY.current - posY.current);

      posX.current += diffX * speed;
      posY.current += diffY * speed;

      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);

      const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
      const rotate = `rotate(${angle}deg)`;
      const translate = `translate3d(${posX.current}px ,${posY.current}px, 0)`;

      cursorRef.current.style.transform = translate;
      cursorCircleRef.current.style.transform = rotate + scale;
    };

    const loop = () => {
      if (cursorRef.current && cursorCircleRef.current) updateCursor();
      requestAnimationFrame(loop);
    };

    loop();

    return () => window.removeEventListener('mousemove', updateCoordinates);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container ref={cursorRef}>
        <Circle ref={cursorCircleRef} id="cursor" />
      </Container>
      <CursorProvider ref={cursorCircleRef}>{children}</CursorProvider>
    </>
  );
};

Cursor.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Cursor;
