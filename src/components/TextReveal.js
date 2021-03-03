// /* eslint-disable react/prop-types,react/destructuring-assignment */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Power3 } from 'gsap/all';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import PropTypes from 'prop-types';
import { forwardRef } from 'react/cjs/react.production.min';
import { MediaQuerySelector } from '../utils/responsive';

const Container = styled.div`
  width: 100%;
  opacity: 0;
  padding-bottom: 4px;
  
  .word{
    padding-right: 6px;

    ${MediaQuerySelector.SMALL_AND_MEDIUM} {
      padding-right: 4px;
    }
  }

  span {
    opacity: 0;
  }

  .underline div {
    opacity: 0;
  }
`;

const Content = styled.div`
  overflow: hidden;
`;

const Text = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  
  #university{
    span{
      height: 48px;

      ${MediaQuerySelector.MEDIUM}{
        height: 32px;
      };

      ${MediaQuerySelector.SMALL}{
        height: 22px;
      };
    }
  }
  
  span {
    height: 42px;
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

const TextReveal = forwardRef((props, ref) => {
  const {
    timeline,
    children,
    style,
    className,
  } = props;

  const textRef = useRef();

  const timelineSettings = {
    staggerValue: 0.014,
    charsDuration: 2.0,
  };

  useEffect(() => {
    Splitting({
      target: textRef.current,
      by: 'lines',
    });

    textRef.current.style.opacity = 1;

    timeline
      .addLabel('start')
      .addLabel('switchtime')
      .set([
        ...textRef.current.querySelectorAll('div span'),
        ...textRef.current.querySelectorAll('.underline span'),
      ], {
        opacity: 1,
        paddingTop: '48px',
      }, 'switchtime')
      .staggerTo([
        ...textRef.current.querySelectorAll('div span'),
        ...textRef.current.querySelectorAll('.underline span'),
        ...textRef.current.querySelectorAll('.underline div'),
        ...textRef.current.querySelectorAll('.hide'),
      ], timelineSettings.charsDuration, {
        ease: Power3.easeOut,
        paddingTop: 0,
        opacity: 1,
      }, timelineSettings.staggerValue, 'switchtime');
  }, []);

  return (
    <Content ref={ref}>
      <Container ref={textRef}>
        <Text style={style} className={className}>
          {children}
        </Text>
      </Container>
    </Content>

  );
});

TextReveal.propTypes = {
  children: PropTypes.element,
  timeline: PropTypes.element.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

TextReveal.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
};

export default TextReveal;
