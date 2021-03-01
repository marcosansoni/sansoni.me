import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Power3 } from 'gsap/all';
// import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import { TimelineLite } from 'gsap';
import Color from '../assets/theme/Color';

// const Container = styled.div`
//   //font-size: 32px;
//   width: 100%;
//   //width: 320px;
//   opacity: 0;
//   //display: flex;
//   //flex-direction: column;
//   //flex-wrap: wrap;
//   padding-bottom: 4px;
//
//   span {
//     opacity: 0;
//   }
//
//   .underline div {
//     opacity: 0;
//   }
//
//   .whitespace{
//     width: 6px;
//   }
// `;

// const Content = styled.div`
//   overflow: hidden;
// `;

const Text = styled.span`
  font-size: 48px;
  display: inline-flex;
  flex-wrap: wrap;
  position: relative;
  //-webkit-text-fill-color: black;

  ::before {
    
    content: "Lorem";
    position: absolute;
    top: 0;
    left: 0;

    /* Setting different color than 
       that of original text  */
    color: ${Color.DARK_ORANGE};
    overflow: hidden;

    /* Setting width to 0*/
    width: 0;
    transition: 1s ease-out;
  }

  :hover::before {
    width: 100%;
  }
`;

const TestText = forwardRef((ref) => {
  const [timeline] = useState(new TimelineLite({ paused: true }));

  const textRef = useRef();

  console.log(ref);
  //
  // const timelineSettings = {
  //   staggerValue: 0.014,
  //   // staggerValue: 0.5,
  //   charsDuration: 2.0,
  // };

  useEffect(() => {
    // Splitting();
    // Splitting({
    //   target: textRef.current,
    //   by: 'chars',
    // });
    // console.log(results);

    // results[0].lines.forEach((line) => {
    //   const first = line[0];
    //   const last = line[line.length - 1];
    //   document.insertBefore()
    //   console.log(first, last);
    // });

    // console.log(textRef.current.querySelectorAll('.underline'));
    // textRef.current.style.opacity = 1;

    // Link
    // https://github.com/codrops/TypographyMotion/blob/master/src/js/index.js
    //   https://tympanus.net/Tutorials/TypographyMotion/

    // gsap.to("h2.title", {duration: 1, opacity: 0.3});
    // gsap.to(".box", {duration: 1.5, stagger: 1, x: 300, textFillColor: "red", ease: "slow(0.7, 0.7, false)"});

    const timelineSettings = {
      staggerValue: 0.54,
      // staggerValue: 0.5,
      charsDuration: 2.0,
    };

    timeline
      // .addLabel('start')
      // .addLabel('switchtime')
      // .set([
      //   ...textRef.current.querySelectorAll('div span'),
      //   ...textRef.current.querySelectorAll('.underline span'),
      //   // ...textRef.current.querySelectorAll('.underline div'),
      // ], {
      //   opacity: 1,
      //   // y: '100%',
      //   paddingTop: '48px',
      // }, 'switchtime')
      .staggerTo(textRef.current.querySelectorAll('.char'), timelineSettings.charsDuration, {
        ease: Power3.easeOut,
        textFillColor: 'red',
        // color: 'red',
        // height: '40px',
        // height: '40px',
        // marginTop: '0',
      }, timelineSettings.staggerValue);

    // timeline.play();
  }, []);

  // useEffect(()=>timeline.play(0))

  return (
    <Text ref={textRef}>
      Lorem
    </Text>
  );
});

export default TestText;
