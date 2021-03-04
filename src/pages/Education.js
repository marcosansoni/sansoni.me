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
  right: 0;
  top: 0;
  width: 500px;
  height: 100px;

  ${MediaQuerySelector.MEDIUM} {
    height: auto;
    bottom: 10px;
  }

  ${MediaQuerySelector.SMALL} {
    height: auto;
    bottom: 5px;
  }
`;

const Content = styled.div`
  padding: 42px 46px;
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

const TitleEducation = styled.div`
  display: block;
`;

const HorizontalLine = styled.div`
  opacity: 0;
  width: 100%;
  height: 6px;
  margin: 12px 0 8px 0;
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
  transform: rotate(90deg);
  transform-origin: top right;
  
  #fullPage, #cover {
    right: -80%;
    top: -55px;
    left: unset;

    ${MediaQuerySelector.MEDIUM}{
      right: -55%;
      top: -30px;
    };

    ${MediaQuerySelector.SMALL}{
      right: -40%;
      top: -25px;
    };
  }
`;

const University = styled.div`
  font-size: 32px;
  font-weight: bold;

  ${MediaQuerySelector.MEDIUM}{
    font-size: 18px;
  };

  ${MediaQuerySelector.SMALL}{
    font-size: 14px;
  };
`;

const Master = styled.div`
  font-size: 24px;
  font-weight: normal;

  ${MediaQuerySelector.MEDIUM}{
    font-size: 18px;
  };

  ${MediaQuerySelector.SMALL}{
    font-size: 14px;
  };
`;

const Graduation = styled.div`
  font-size: 22px;
  font-weight: normal;
  font-style: italic;

  ${MediaQuerySelector.MEDIUM}{
    font-size: 18px;
  };

  ${MediaQuerySelector.SMALL}{
    font-size: 14px;
  };
`;

const MasterThesis = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-weight: bold;
  font-size: 20px;
  margin-top: 24px;
  flex-wrap: wrap;

  ${MediaQuerySelector.MEDIUM}{
    font-size: 18px;
    margin-top: 32px;
  };

  ${MediaQuerySelector.SMALL}{
    font-size: 14px;
    margin-top: 32px;
  };
`;

const ThesisName = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-end;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  text-align: end;

  ${MediaQuerySelector.MEDIUM}{
    font-size: 15px;
  };

  ${MediaQuerySelector.SMALL}{
    font-size: 12px;
  };
`;

const Education = () => {
  const textRef = useRef();
  const { handleLeave, handleHover } = useCursorRef();
  const titleTimeline = useState(gsap.timeline({ paused: false }));
  const boxTimeline = useState(gsap.timeline({ paused: false }));
  const textTimeline = useState(gsap.timeline({ paused: false }));
  const masterTimeline = useState(gsap.timeline({ paused: true }));

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
        const currentWidth = Math.min(322, widthWindow - 128);
        const incrementalHeight = (322 - currentWidth) ** 1.01;
        setWidth(currentWidth);
        setHeight(365 + incrementalHeight);
      } else if (widthWindow <= Number(Breakpoint.LG)
        && widthWindow >= Number(Breakpoint.SM)) {
        setWidth(490);
        setHeight(440);
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
    <Container ref={ref} id="educationPage">
      <Box
        timeline={boxTimeline[0]}
        width={width}
        height={height}
        onMouseEnter={() => handleHover('text')}
        onMouseLeave={() => handleLeave('text')}
      >
        <Title>
          <StyledTitle timeline={titleTimeline[0]}>WHAT I STUDIED</StyledTitle>
        </Title>
        <Content>
          <StyledTextReveal timeline={textTimeline[0]} ref={textRef}>
            <TitleEducation>
              <University id="university">University of Padova</University>
              <Master>Master Degree on Computer Engineering</Master>
              <Graduation>Graduation: 110 cum Laude</Graduation>
            </TitleEducation>
            <HorizontalLine className="hide" />
            <Paragraph>
              It involves courses with deep theoretical content as well as several hours of laboratory.
              Main courses are Machine Learning, Big Data, Algorithms, Web Application.
            </Paragraph>
            <MasterThesis>Master Thesis</MasterThesis>
            <ThesisName>
              "On the use of the Silhoutte for cost based clustering".
            </ThesisName>
          </StyledTextReveal>
        </Content>
      </Box>
    </Container>
  );
};

export default Education;
