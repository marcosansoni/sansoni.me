import React, { useState, useEffect } from 'react';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import { TimelineLite } from 'gsap';
import TitleBox from './TitleBox';
import Cursor from './Cursor';

const Test = () => {
  const timeline = useState(new TimelineLite({ paused: true }));

  // const textRef = useRef();
  //
  // const timelineSettings = {
  //   staggerValue: 0.014,
  //   // staggerValue: 0.5,
  //   charsDuration: 2.0,
  // };
  //

  useEffect(() => {
    timeline[0].play();
  }, []);

  return (
    <Cursor>
      <TitleBox timeline={timeline[0]}>CIAO</TitleBox>
    </Cursor>
  );
};

export default Test;
