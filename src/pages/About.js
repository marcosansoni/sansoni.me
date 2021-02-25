import React, { useEffect, useState, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';
import ResizeObserver from 'resize-observer-polyfill';
import { Breakpoint, MediaQuerySelector } from '../utils/responsive';
import Box from '../components/Box';
import TitleBox from '../components/TitleBox';
import TextReveal from '../components/TextReveal';
import TextUnderlineCover from '../components/TextUnderlineCover';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding-left: 96px;
  padding-right: 96px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MediaQuerySelector.SMALL}{
    padding-left: 48px;
    padding-right: 48px;
  }

  ${MediaQuerySelector.MEDIUM}{
    padding-left: 64px;
    padding-right: 64px;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: -50px;
  right: -80px;
  width: 400px;
  height: 100px;
`;

const Content = styled.div`
  padding: 48px;
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  
  ${MediaQuerySelector.MEDIUM}{
    font-size: 26px;
    line-height: 32px;
  };

  ${MediaQuerySelector.SMALL}{
    font-size: 14px;
    line-height: 22px;
  }
  
`;

const About = () => {
  console.log('About');

  const textRef = useRef();
  const titleTimeline = useState(new TimelineLite({ paused: false }));
  const boxTimeline = useState(new TimelineLite({ paused: false }));
  const textTimeline = useState(new TimelineLite({ paused: false }));

  const masterTimeline = useState(new TimelineLite({ paused: true }));

  const [width, setWidth] = useState(540);
  const [height, setHeight] = useState(420);

  // dth: 567,
  //   height: 485,

  const onVisible = () => {
    // console.log('play');
    masterTimeline[0].play();
  };

  useEffect(() => {
    console.log(textRef);
    // const width = ;
    // const height = ;
    // setWidth(textRef.current?.offsetWidth);
    // console.log(textRef.current?.offsetWidth);
    // console.log(textRef.current?.offsetHeight);
    // setHeight(textRef.current?.offsetHeight);
    if (masterTimeline) {
      // console.log(masterTimeline);
      masterTimeline[0].add(boxTimeline)// starts at time of 0
        .add(textTimeline, 1) // starts at 1 seconds
        .add(titleTimeline, 3);// starts at 3 seconds
    }
    onVisible();
  });

  // const [widthBody, setWidthBody] = useState(0);

  const widthObserver = useMemo(() => new ResizeObserver(
    (entries) => entries.forEach((entry) => {
      const { width: widthWindow, height: heightWindow } = entry.contentRect;
      console.log(heightWindow);
      if (widthWindow <= Number(Breakpoint.SM)) {
        setWidth(widthWindow - 164);
      } else if (widthWindow <= Number(Breakpoint.LG)
        && widthWindow >= Number(Breakpoint.SM)) {
        setWidth(480);
        setHeight(360);
      } else {
        setWidth(540);
      }
    }),
  ), []);

  useEffect(() => {
    widthObserver.observe(document.body);
  }, []);

  return (
    <Container>
      <Box timeline={boxTimeline[0]} width={width} height={height}>
        <Title>
          <TitleBox timeline={titleTimeline[0]} />
        </Title>
        <Content>
          <TextReveal timeline={textTimeline[0]} ref={textRef}>
            I'm Marco Sansoni, an italian based <TextUnderlineCover>Front End Developer</TextUnderlineCover>.
            Experienced with <TextUnderlineCover>React</TextUnderlineCover> and <TextUnderlineCover>Redux</TextUnderlineCover>, but I am always looking to learn something new.
            Currently I am diving into Full Stack with <TextUnderlineCover>Node</TextUnderlineCover> and <TextUnderlineCover>Golang</TextUnderlineCover>.
          </TextReveal>
        </Content>
      </Box>
    </Container>
  );
};

export default About;
