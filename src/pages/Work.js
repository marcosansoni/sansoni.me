import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';
import ResizeObserver from 'resize-observer-polyfill';
import { useInView } from 'react-intersection-observer';
import { Breakpoint, MediaQuerySelector } from '../utils/responsive';
import Box from '../components/Box';
import TitleBox from '../components/TitleBox';
import TextReveal from '../components/TextReveal';
import useCursorRef from '../context/useCursorRef';
import Color from '../assets/theme/Color';

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

  ${MediaQuerySelector.SMALL} {
    //padding-left: 48px;
    padding-right: 48px;
  }

  ${MediaQuerySelector.MEDIUM} {
    //padding-left: 64px;
    padding-right: 64px;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  //bottom: -50px;
  //right: -80px;
  width: 400px;
  height: 100px;
  //font-size: ;

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

  ${MediaQuerySelector.MEDIUM} {
    font-size: 26px;
    line-height: 32px;
    padding: 42px;
  }
;

  ${MediaQuerySelector.SMALL} {
    padding: 24px;
    font-size: 18px;
    line-height: 22px;
  }
`;

const TitleWorkPlace = styled.div`
  display: flex;
  align-items: flex-end;
`;

const WorkPlace = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const Separator = styled.div`
  margin: 0 8px;
  height: 100%;
  width: 2px;
  border-radius: 2px;
  background-color: ${Color.BLACK};
`;

const Period = styled.div`
  font-size: 24px;
  font-weight: normal;
  font-style: italic;
  display: flex;
  align-items: flex-end;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 6px;
  margin: 16px 0 8px 0;
  border-radius: 6px;
  background-color: ${Color.DARK_ORANGE};
`;

const Paragraph = styled.div`
  font-size: 24px;
  font-weight: normal;
  margin: 8px 0 0 0;
`;

const StyledTextReveal = styled(TextReveal)`
  span {
    height: 32px;
    overflow: hidden;
    display: inline-flex;

    ${MediaQuerySelector.MEDIUM}{
      height: 32px;
    };

    ${MediaQuerySelector.SMALL}{
      height: 22px;
    }
  }
`;

const Work = () => {
  const textRef = useRef();
  const { handleLeave, handleHover } = useCursorRef();
  const titleTimeline = useState(new TimelineLite({ paused: false }));
  const boxTimeline = useState(new TimelineLite({ paused: false }));
  const textTimeline = useState(new TimelineLite({ paused: false }));

  const masterTimeline = useState(new TimelineLite({ paused: true }));

  const [width, setWidth] = useState(580);
  const [height, setHeight] = useState(510);

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
        setWidth(580);
        setHeight(510);
      }
    }),
  ), []);

  useEffect(() => {
    widthObserver.observe(document.body);
  }, []);

  return (
    <Container
      ref={ref}
      id="aboutPage"
      onMouseEnter={() => handleHover('text')}
      onMouseLeave={() => handleLeave('text')}
    >
      <Box timeline={boxTimeline[0]} width={width} height={height}>
        <Title>
          <TitleBox timeline={titleTimeline[0]}>WHERE I WORK</TitleBox>
        </Title>
        <Content>
          <StyledTextReveal timeline={textTimeline[0]} ref={textRef}>
            {/* I'm Marco Sansoni, an italian based <br style={width > 300 ? { display: 'none' } : {}} /> <StyledUnderlined className="underline">Front End Developer</StyledUnderlined>. */}
            {/* Experienced with <StyledUnderlined className="underline">React</StyledUnderlined> and <StyledUnderlined className="underline">Redux</StyledUnderlined>, but I am always looking to learn something new. */}
            {/* Currently I am diving into Full Stack with <StyledUnderlined className="underline">Node</StyledUnderlined> and <StyledUnderlined className="underline">Golang</StyledUnderlined>. */}
            <TitleWorkPlace>
              <WorkPlace>Milkman</WorkPlace><Separator /><Period>Sept 2019 - Actual</Period>
            </TitleWorkPlace>
            <HorizontalLine />
            <Paragraph>
              It is an italian scale up, focused on delivery and last mile. I faced an paced environment with remote working.
            </Paragraph>
            <Paragraph>
              Job involves creation, manteining and improving several webapps, using React, Redux and Cypress as testing tools.
            </Paragraph>
            <Paragraph>
              Something else, like communication between team, self organization due to  remote working but also team organization.
            </Paragraph>
          </StyledTextReveal>
        </Content>
      </Box>
    </Container>
  );
};

export default Work;
