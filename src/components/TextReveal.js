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
  //font-size: 32px;
  width: 100%;
  //width: 320px;
  opacity: 0;
  padding-bottom: 4px;
  
  // .whitespace{
  //   width: 6px;
  //  
  //   ${MediaQuerySelector.SMALL_AND_MEDIUM} {
  //     width: 4px;
  //   }
  // }
  
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
  // const [timeline] = useState(new TimelineLite({ paused: true }));
  const {
    timeline,
    children,
    style,
    className,
  } = props;

  const textRef = useRef();

  const timelineSettings = {
    staggerValue: 0.014,
    // staggerValue: 0.5,
    charsDuration: 2.0,
  };

  useEffect(() => {
    // Splitting();
    Splitting({
      target: textRef.current,
      by: 'lines',
    });
    // console.log(results);

    // results[0].lines.forEach((line) => {
    //   const first = line[0];
    //   const last = line[line.length - 1];
    //   document.insertBefore()
    //   console.log(first, last);
    // });

    // console.log(textRef.current.querySelectorAll('.underline'));
    textRef.current.style.opacity = 1;

    // Link
    // https://github.com/codrops/TypographyMotion/blob/master/src/js/index.js
    //   https://tympanus.net/Tutorials/TypographyMotion/

    timeline
      .addLabel('start')
      .addLabel('switchtime')
      .set([
        ...textRef.current.querySelectorAll('div span'),
        ...textRef.current.querySelectorAll('.underline span'),
        // ...textRef.current.querySelectorAll('.underline div'),
      ], {
        opacity: 1,
        // y: '100%',
        paddingTop: '48px',
      }, 'switchtime')
      .staggerTo([
        ...textRef.current.querySelectorAll('div span'),
        ...textRef.current.querySelectorAll('.underline span'),
        ...textRef.current.querySelectorAll('.underline div'),
      ], timelineSettings.charsDuration, {
        ease: Power3.easeOut,
        // y: '0%',
        paddingTop: 0,
        opacity: 1,
        // color: 'red',
        // height: '40px',
        // height: '40px',
        // marginTop: '0',
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
