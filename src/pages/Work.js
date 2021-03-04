import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ResizeObserver from 'resize-observer-polyfill';
import { useInView } from 'react-intersection-observer';
import { Breakpoint, MediaQuerySelector } from '../utils/responsive';
import Box from '../components/Box';
import TextReveal from '../components/TextReveal';
import useCursorRef from '../context/useCursorRef';
import Color from '../assets/theme/Color';
import TitleBox from '../components/TitleBox';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  padding-right: 96px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 45px;

  ${MediaQuerySelector.SMALL} {
    padding-right: 8px;
  }

  ${MediaQuerySelector.MEDIUM} {
    padding-right: 64px;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
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

  ${MediaQuerySelector.MEDIUM} {
    font-size: 26px;
    line-height: 32px;
    padding: 42px;
  }
;

  ${MediaQuerySelector.SMALL} {
    padding: 24px;
    font-size: 14px;
    line-height: 18px;
  }
`;

const TitleWorkPlace = styled.div`
  display: flex;
  align-items: flex-end;

 @media only screen and (max-width : 420px){
   display: block;
 }
  
`;

const WorkPlace = styled.div`
  font-size: 32px;
  font-weight: bold;

  ${MediaQuerySelector.MEDIUM}{
    font-size: 24px;
  };

  ${MediaQuerySelector.SMALL}{
    font-size: 20px;
  };
`;

const Separator = styled.div`
  opacity: 0;
  margin: 0 8px;
  height: 100%;
  width: 2px;
  border-radius: 2px;
  background-color: ${Color.BLACK};

  @media only screen and (max-width : 420px){
    display: none;
  }
`;

const Period = styled.div`
  font-size: 24px;
  font-weight: normal;
  font-style: italic;
  display: flex;
  align-items: flex-end;

  ${MediaQuerySelector.MEDIUM}{
    font-size: 18px;
  };

  ${MediaQuerySelector.SMALL}{
    font-size: 14px;
  };

  @media only screen and (max-width : 420px){
    font-size: 12px;
  }
`;

const HorizontalLine = styled.div`
  opacity: 0;
  width: 100%;
  height: 6px;
  margin: 16px 0 8px 0;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${Color.BLACK};

  ${MediaQuerySelector.MEDIUM}{
    height: 4px;
    margin: 8px 0 6px 0;
    border-radius: 4px;
  };

  ${MediaQuerySelector.SMALL}{
    height: 3px;
    margin: 8px 0 4px 0;
    border-radius: 3px;
  };

  @media only screen and (max-width : 420px){
    margin: 4px 0 4px 0;
  }
`;

const Paragraph = styled.div`
  font-size: 24px;
  font-weight: normal;
  margin: 8px 0 0 0;

  ${MediaQuerySelector.MEDIUM}{
    font-size: 18px;
  };

  ${MediaQuerySelector.SMALL}{
    font-size: 14px;
  };
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

const StyledTitle = styled(TitleBox)`
  transform: rotate(-90deg);
  transform-origin: top left;
  
  #fullPage, #cover {
    left: -75%;
    top: -60px;
    right: unset;

    ${MediaQuerySelector.MEDIUM}{
      left: -50%;
      top: -30px;
    };

    ${MediaQuerySelector.SMALL}{
      left: -35%;
      top: -25px;
    };
    
  }
  
  
`;

const Work = () => {
  const textRef = useRef();
  const { handleLeave, handleHover } = useCursorRef();
  const titleTimeline = useState(gsap.timeline({ paused: false }));
  const boxTimeline = useState(gsap.timeline({ paused: false }));
  const textTimeline = useState(gsap.timeline({ paused: false }));
  const masterTimeline = useState(gsap.timeline({ paused: true }));

  const [width, setWidth] = useState(580);
  const [height, setHeight] = useState(490);

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
        const currentWidth = Math.min(330, widthWindow - 128);
        const incrementalHeight = (330 - currentWidth) ** 1.12;
        setWidth(currentWidth);
        setHeight(340 + incrementalHeight);
      } else if (widthWindow <= Number(Breakpoint.LG)
        && widthWindow >= Number(Breakpoint.SM)) {
        setWidth(440);
        setHeight(450);
      } else {
        setWidth(580);
        setHeight(490);
      }
    }),
  ), []);

  useEffect(() => {
    widthObserver.observe(document.body);
  }, []);

  return (
    <Container ref={ref} id="workPage">
      <Box
        timeline={boxTimeline[0]}
        width={width}
        height={height}
        onMouseEnter={() => handleHover('text')}
        onMouseLeave={() => handleLeave('text')}
      >
        <Title>
          <StyledTitle timeline={titleTimeline[0]}>WHERE I WORK</StyledTitle>
        </Title>
        <Content>
          <StyledTextReveal timeline={textTimeline[0]} ref={textRef}>
            <TitleWorkPlace>
              <WorkPlace>Milkman</WorkPlace>
              <Separator className="hide" />
              <Period>Sept 2019 - Actual</Period>
            </TitleWorkPlace>
            <HorizontalLine className="hide" />
            <Paragraph>
              It is an italian scale up, focused on delivery and last mile. I faced an paced environment with remote working.
            </Paragraph>
            <Paragraph>
              Job involves creation, maintaining and improving several webapps, using React, Redux and Cypress as testing tools.
            </Paragraph>
            <Paragraph>
              As a remote work, It requires excellent self organization and communication skills.
            </Paragraph>
          </StyledTextReveal>
        </Content>
      </Box>
    </Container>
  );
};

export default Work;
