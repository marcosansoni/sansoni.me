import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Power3 } from 'gsap/all';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import { TimelineLite } from 'gsap';

const Container = styled.div`
  //font-size: 32px;
  width: 100%;
  //width: 320px;
  opacity: 0;
  //display: flex;
  //flex-direction: column;
  //flex-wrap: wrap;
  padding-bottom: 4px;

  span {
    opacity: 0;
  }

  .underline div {
    opacity: 0;
  }
  
  .whitespace{
    width: 6px;
  }
`;

const Content = styled.div`
  overflow: hidden;
`;

const Text = styled.span`
  font-size: 48px;
  display: inline-flex;
  flex-wrap: wrap;
  //;
  //
  
  span {
    height: 48px;
    overflow: hidden;
    display: inline-flex;
  }
`;

const Test = forwardRef((props, ref) => {
  const [timeline] = useState(new TimelineLite({ paused: true }));

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
        opacity: 1,
        paddingTop: 0,
        // color: 'red',
        // height: '40px',
        // height: '40px',
        // marginTop: '0',
      }, timelineSettings.staggerValue, 'switchtime');

    timeline.play();
  }, []);

  // useEffect(()=>timeline.play(0))

  return (
    <Content ref={ref}>
      <Container ref={textRef}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis massa id dolor hendrerit rhoncus. Sed tincidunt convallis laoreet. Integer placerat dolor massa. Ut lorem mauris, vestibulum eu erat a, ultricies luctus sapien. Proin posuere, nisl non ornare varius, risus est hendrerit dui, placerat aliquet erat mauris vel ex. Sed vitae rhoncus sapien. Nunc facilisis nisl justo, a congue nisl venenatis vel. Donec luctus quam nunc, rhoncus dignissim risus dignissim eu. Pellentesque vehicula diam aliquam imperdiet scelerisque. Nullam justo tortor, finibus quis accumsan imperdiet, porta at ligula. Nulla facilisi. Cras sagittis urna at quam lobortis, a fermentum sem semper. Phasellus hendrerit leo diam, eget posuere leo interdum convallis. Aenean ut scelerisque ipsum. Aenean non lectus et turpis semper elementum non quis nibh. Fusce vel faucibus neque.
        </Text>
      </Container>
    </Content>

  );
});

export default Test;
