import React, { forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Power3 } from 'gsap/all';
import { MediaQuerySelector } from '../utils/responsive';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  //width: 100%;
  width: ${(p) => `${p.width}px`};
  height: ${(p) => `${p.height}px`};
  
  ${MediaQuerySelector.SMALL} {
    width: 100%;
    height: auto;
  }

  // #box path:nth-child(1) {
  //     // stroke-dasharray: ${(p) => `${p.length}px`};
  //     // stroke-dashoffset: ${(p) => `${p.length}px`};
  //   stroke-dashoffset: 2200px;
  //   stroke-dasharray: 2200px;
  //   stroke-width: 1;
  // }

  rect {
    stroke-dasharray: ${(p) => `${p.length}px`};
    stroke-dashoffset: ${(p) => `${p.length}px`};
    stroke-width: 1;
  }

`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 4px;
`;

const Box = forwardRef((props, ref) => {
  const {
    children,
    width,
    height,
    timeline,
  } = props;

  // console.log(timelineProps);

  // const height = useMemo(() => (width * 485) / 567, [width]);

  // const [timeline] = useState(new TimelineLite({ paused: true }));

  const pathRef = useRef();

  useEffect(() => {
    timeline
      .addLabel('start')
      .staggerTo(pathRef.current, 5, {
        strokeDashoffset: 0,
        strokeWidth: 4,
        ease: Power3.easeOut,
      });
    timeline.play();
  }, []);

  return (
    <Container length={width * 2 + height * 2} ref={ref} width={width} height={height}>
      {/* <svg */}
      {/*  id="box" */}
      {/*  width={width} */}
      {/*  height={height} */}
      {/*  viewBox="0 0 567 485" */}
      {/*  fill="white" */}
      {/*  xmlns="http://www.w3.org/2000/svg" */}
      {/* > */}
      {/*  <path */}
      {/*    width={width} */}
      {/*    height={height} */}
      {/*    ref={pathRef} */}
      {/*    d="M563 4H4V481H563V4ZM0 0V485H567V0H0Z" */}
      {/*    stroke="black" */}
      {/*  /> */}
      {/* </svg> */}
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <rect width={width} height={height} stroke="black" fill="transparent" ref={pathRef} />
      </svg>
      <Content>
        {children}
      </Content>
    </Container>
  );
});

Box.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.element,
  timeline: PropTypes.element.isRequired,
};

Box.defaultProps = {
  width: 587,
  height: 420,
  children: undefined,
};

export default Box;
