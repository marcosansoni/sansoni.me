// /* eslint-disable react/prop-types,react/destructuring-assignment */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Power3, TimelineLite } from 'gsap/all';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import TextUnderlineCover from './TextUnderlineCover';

const Container = styled.div`
  font-size: 32px;
  width: 320px;
  opacity: 0;

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

const TextReveal = () => {
  const [timeline] = useState(new TimelineLite({ paused: true }));

  const textRef = useRef();

  const timelineSettings = {
    staggerValue: 0.014,
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
      .set([...textRef.current.querySelectorAll('div span'), ...textRef.current.querySelectorAll('.underline div')], {
        opacity: 1,
        display: 'inline-flex',
        overflow: 'hidden',
        height: '22px',
        paddingTop: '100%',
        onComplete: () => console.log('completed'),
      }, 'switchtime')
      .staggerTo([...textRef.current.querySelectorAll('div span'), ...textRef.current.querySelectorAll('.underline div')], timelineSettings.charsDuration, {
        ease: Power3.easeOut,
        paddingTop: '0%',
      }, timelineSettings.staggerValue, 'switchtime');
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const lines = textRef.current.getClientRects();
      console.log(lines);
    }
  }, [textRef]);

  return (
    <Content>
      <Container ref={textRef} onClick={() => timeline.play()}>
        I'm Marco Sansoni, an italian based <TextUnderlineCover className="underline">Front End Developer</TextUnderlineCover>.
        Experienced with <TextUnderlineCover className="underline">React</TextUnderlineCover> and <TextUnderlineCover className="underline">Redux</TextUnderlineCover>, but I am always looking to learn something
        new. Currently I am diving into Full Stack with <TextUnderlineCover className="underline">Node</TextUnderlineCover> and <TextUnderlineCover className="underline">Golang</TextUnderlineCover>.
      </Container>
    </Content>

  );
};

export default TextReveal;
