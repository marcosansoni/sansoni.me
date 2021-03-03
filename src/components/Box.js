import React, { forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Power3 } from 'gsap/all';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(p) => `${p.width}px`};
  height: ${(p) => `${p.height}px`};

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
    style,
    className,
    ...otherProps
  } = props;

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
    <Container {...otherProps} length={width * 2 + height * 2} ref={ref} width={width} height={height}>
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <rect width={width} height={height} stroke="black" fill="transparent" ref={pathRef} />
      </svg>
      <Content style={style} className={className}>
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
  style: PropTypes.object,
  className: PropTypes.string,
};

Box.defaultProps = {
  width: 587,
  height: 420,
  children: undefined,
  style: undefined,
  className: undefined,
};

export default Box;
