import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';
import { MediaQuerySelector } from '../utils/responsive';
import Box from '../components/Box';
import TitleBox from '../components/TitleBox';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding-left: 96px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MediaQuerySelector.SMALL}{
    padding-left: 48px;
  }

  ${MediaQuerySelector.MEDIUM}{
    padding-left: 64px;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: -50px;
  right: -80px;
  width: 400px;
  height: 100px;
`;

const About = () => {
  console.log('About');

  const boxRef = useRef();
  const titleTimeline = useState(new TimelineLite({ paused: true, delay: 3 }));

  const onVisible = () => {
    if (boxRef.current) {
      boxRef.current.id = 'boxContainer';
    }
    titleTimeline[0].play();
  };

  useEffect(() => {
    onVisible();
  });

  return (
    <Container>
      <Box ref={boxRef}>
        <Title>
          <TitleBox timeline={titleTimeline[0]} />
        </Title>
        <div>Ciao</div>
      </Box>
    </Container>
  );
};

export default About;
