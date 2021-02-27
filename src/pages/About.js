import React, { useEffect, useState, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';
import ResizeObserver from 'resize-observer-polyfill';
import { useInView } from 'react-intersection-observer';
import { Breakpoint, MediaQuerySelector } from '../utils/responsive';
import Box from '../components/Box';
import TitleBox from '../components/TitleBox';
import TextReveal from '../components/TextReveal';
import TextUnderlineCover from '../components/TextUnderlineCover';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  //padding-left: 96px;Ti
  padding-right: 96px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 45px;

  ${MediaQuerySelector.SMALL}{
    //padding-left: 48px;
    padding-right: 48px;
  }

  ${MediaQuerySelector.MEDIUM}{
    //padding-left: 64px;
    padding-right: 64px;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: -50px;
  right: -80px;
  width: 400px;
  height: 100px;
  
  ${MediaQuerySelector.MEDIUM} {
    right: -40px;
    height: auto;
    bottom: 10px;
  }

  ${MediaQuerySelector.SMALL} {
    right: -20px;
    height: auto;
    bottom: 5px;
  }
`;

const Content = styled.div`
  padding: 46px;
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  
  ${MediaQuerySelector.MEDIUM}{
    font-size: 26px;
    line-height: 32px;
    padding: 42px;
  };

  ${MediaQuerySelector.SMALL}{
    padding: 24px;
    font-size: 18px;
    line-height: 22px;
  }
`;

const About = () => {
  const textRef = useRef();
  const titleTimeline = useState(new TimelineLite({ paused: false }));
  const boxTimeline = useState(new TimelineLite({ paused: false }));
  const textTimeline = useState(new TimelineLite({ paused: false }));

  const masterTimeline = useState(new TimelineLite({ paused: true }));

  const [width, setWidth] = useState(520);
  const [height, setHeight] = useState(420);

  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (masterTimeline) {
      masterTimeline[0].add(boxTimeline)// starts at time of 0
        .add(textTimeline, 1) // starts at 1 seconds
        .add(titleTimeline, 3);// starts at 3 seconds
    }
  }, []);

  useEffect(() => {
    if (inView) {
      masterTimeline[0].play();
    } else {
      masterTimeline[0].reverse();
    }
  }, [inView]);

  const widthObserver = useMemo(() => new ResizeObserver(
    (entries) => entries.forEach((entry) => {
      const { width: widthWindow } = entry.contentRect;
      if (widthWindow <= Number(Breakpoint.SM)) {
        const currentWidth = Math.min(320, widthWindow - 128);
        const incrementalHeight = (320 - currentWidth) ** 1.05;
        setWidth(currentWidth);
        setHeight(220 + incrementalHeight);
      } else if (widthWindow <= Number(Breakpoint.LG)
        && widthWindow >= Number(Breakpoint.SM)) {
        setWidth(460);
        setHeight(330);
      } else {
        setWidth(540);
        setHeight(420);
      }
    }),
  ), []);

  useEffect(() => {
    widthObserver.observe(document.body);
  }, []);

  return (
    <Container ref={ref}>
      <Box timeline={boxTimeline[0]} width={width} height={height}>
        <Title>
          <TitleBox timeline={titleTimeline[0]}>WHO I AM</TitleBox>
        </Title>
        <Content>
          <TextReveal timeline={textTimeline[0]} ref={textRef}>
            I'm Marco Sansoni, an italian based <br style={width > 300 ? { display: 'none' } : {}} /> <TextUnderlineCover>Front End Developer</TextUnderlineCover>.
            Experienced with <TextUnderlineCover>React</TextUnderlineCover> and <TextUnderlineCover>Redux</TextUnderlineCover>, but I am always looking to learn something new.
            Currently I am diving into Full Stack with <TextUnderlineCover>Node</TextUnderlineCover> and <TextUnderlineCover>Golang</TextUnderlineCover>.
          </TextReveal>
        </Content>
      </Box>
    </Container>
  );
};

export default About;
