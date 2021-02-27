import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap/all';
import PropTypes from 'prop-types';
import Color from '../assets/theme/Color';
import { MediaQuerySelector } from '../utils/responsive';

const Item = styled.span`
  height: 100%;
  color: ${Color.BLACK};
`;

const Container = styled.a`
  position: relative;
  cursor: pointer;
  user-select: none;
  height: ${(p) => `${p.size}px`};
  font-size: ${(p) => `${p.size}px`};
  transform: ${(p) => `rotate(${p.rotation}deg)`};
  
  :hover{
    #text{
      color: ${Color.GRAY_DARK};
    }
    
    #line{
      opacity:1
    }
  }
  
  ${MediaQuerySelector.SMALL} {
    height: ${(p) => `${p.size * 0.8}px`};
    font-size: ${(p) => `${p.size * 0.8}px`};
  }

  ${MediaQuerySelector.MEDIUM} {
    height: ${(p) => `${p.size * 0.9}px`};
    font-size: ${(p) => `${p.size * 0.9}px`};
  }
`;

const Line = styled.span`
  position: absolute;
  top: ${(p) => `${p.top}px`};
  left: 0;
  width: 100%;
  line-height: 1;
  height: ${(p) => `${p.height}px`};
  background-color: ${Color.DARK_ORANGE};
  opacity: 0;
`;

const Box = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  
  svg{
    height: 0;
    width: 0;
  }
`;

const MenuItem = (props) => {
  const { size, children, style, className, rotation } = props;

  const lineRef = useRef();
  const textRef = useRef();
  const turbulenceRef = useRef();
  const id = useRef(Math.random() * 10000000);
  const primitiveValues = useRef({ turbulence: 0 });

  const [timeline, setTimeline] = useState();

  const [height, setHeight] = useState();

  useEffect(() => {
    const h = textRef.current?.offsetHeight;
    if (h && h !== height) setHeight(h);
  }, [textRef]);

  useEffect(() => {
    if (lineRef?.current && !timeline) {
      setTimeline(new TimelineLite({
        paused: true,
        onStart: () => {
          lineRef.current.style.filter = `url(#filter-${id.current})`;
        },
        onComplete: () => {
          lineRef.current.style.filter = 'none';
        },
        onUpdate: () => {
          turbulenceRef.current.setAttribute('baseFrequency', primitiveValues.current.turbulence);
        },
      }));
    }
  }, [lineRef]);

  useEffect(() => {
    if (timeline) {
      timeline.to(primitiveValues.current, 0.4, {
        startAt: { turbulence: 0.09 },
        turbulence: 0,
      });
    }
  }, [timeline]);

  return (
    <>
      <Box style={style} className={className}>
        <svg>
          <defs>
            <filter id={`filter-${id.current}`}>
              <feTurbulence type="fractalNoise" ref={turbulenceRef} baseFrequency="0" numOctaves="1" result="warp" />
              <feOffset dx="0" result="warpOffset" />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="20"
                in="SourceGraphic"
                in2="warpOffset"
              />
            </filter>
          </defs>
        </svg>
        <Container onMouseEnter={() => timeline.play(0)} size={size} rotation={rotation}>
          <Item id="text" size={size} ref={textRef}>{children}</Item>
          <Line id="line" ref={lineRef} height={height / 4} top={(3 * height) / 8} />
        </Container>
      </Box>
    </>
  );
};

MenuItem.propTypes = {
  size: PropTypes.number,
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  rotation: PropTypes.number,
};

MenuItem.defaultProps = {
  size: 32,
  children: undefined,
  style: undefined,
  className: undefined,
  rotation: 0,
};

export default MenuItem;
