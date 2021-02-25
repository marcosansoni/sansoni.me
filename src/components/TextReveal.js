// /* eslint-disable react/prop-types,react/destructuring-assignment */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Power3 } from 'gsap/all';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import PropTypes from 'prop-types';
import { forwardRef } from 'react/cjs/react.production.min';

const Container = styled.div`
  //font-size: 32px;
  width: 100%;
  //width: 320px;
  opacity: 0;
  padding-bottom: 4px;

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

const TextReveal = forwardRef((props, ref) => {
  // const [timeline] = useState(new TimelineLite({ paused: true }));
  const {
    timeline,
    children,
  } = props;

  const textRef = useRef();

  const timelineSettings = {
    staggerValue: 0.014,
    // staggerValue: 0.5,
    charsDuration: 2.0,
  };

  useEffect(() => {
    // Splitting();
    const results = Splitting({
      target: textRef.current,
      by: 'lines',
    });
    console.log(results);

    // results[0].lines.forEach((line) => {
    //   const first = line[0];
    //   const last = line[line.length - 1];
    //   document.insertBefore()
    //   console.log(first, last);
    // });

    console.log(textRef.current.querySelectorAll('.underline'));
    textRef.current.style.opacity = 1;

    // Link
    // https://github.com/codrops/TypographyMotion/blob/master/src/js/index.js
    //   https://tympanus.net/Tutorials/TypographyMotion/

    timeline
      .addLabel('start')
      .addLabel('switchtime')
      // .set(textRef.current.querySelectorAll('.underline div'), {
      //   opacity: 1,
      //   // display: 'inline-flex',
      //   // overflow: 'hidden',
      //   // // color: 'white',
      //   // // height: '0px',
      //   // // paddingTop: '38px',
      //   // onComplete: () => console.log('completed'),
      // }, 'switchtime')
      .set([
        ...textRef.current.querySelectorAll('div span'),
        ...textRef.current.querySelectorAll('.underline span'),
        // ...textRef.current.querySelectorAll('.underline div'),
      ], {
        opacity: 1,
        // display: 'inline-flex',
        // overflow: 'hidden',
        // color: 'white',
        // height: '0px',
        // paddingTop: '38px',
        // onComplete: () => console.log('completed'),
        y: '100%',
      }, 'switchtime')
      // .set(textRef.current.querySelectorAll('.underline div'), {
      //   opacity: 1,
      //   // display: 'inline-flex',
      //   // overflow: 'hidden',
      //   // color: 'white',
      //   // height: '0px',
      //   // paddingTop: '38px',
      //   // onComplete: () => console.log('completed'),
      //   y: '100%',
      // }, 'switchtime')
      .staggerTo([
        ...textRef.current.querySelectorAll('div span'),
        ...textRef.current.querySelectorAll('.underline span'),
        ...textRef.current.querySelectorAll('.underline div'),
      ], timelineSettings.charsDuration, {
        ease: Power3.easeOut,
        y: '0%',
        opacity: 1,
        // color: 'red',
        // height: '40px',
        // height: '40px',
        // marginTop: '0',
      }, timelineSettings.staggerValue, 'switchtime');
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const lines = textRef.current.getClientRects();
      console.log(lines);
    }
  }, [textRef]);

  return (
    <Content ref={ref}>
      <Container ref={textRef}>
        {children}
        {/* I'm Marco Sansoni, an italian based <br /> <TextUnderlineCover className="underline">Front End Developer</TextUnderlineCover>. */}
        {/* Experienced with <TextUnderlineCover className="underline">React</TextUnderlineCover> and <TextUnderlineCover className="underline">Redux</TextUnderlineCover>, but I am always looking to learn something */}
        {/* new. Currently I am diving into Full Stack with <TextUnderlineCover className="underline">Node</TextUnderlineCover> and <TextUnderlineCover className="underline">Golang</TextUnderlineCover>. */}
      </Container>
    </Content>

  );
});

TextReveal.propTypes = {
  children: PropTypes.element,
  timeline: PropTypes.element.isRequired,
};

TextReveal.defaultProps = {
  children: undefined,
};

export default TextReveal;
