// /* eslint-disable react/prop-types,react/destructuring-assignment */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TimelineLite, Power3 } from 'gsap/all';
// import { Waypoint } from 'react-waypoint';
// import SplitText from 'node_';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

//
const Container = styled.div`
  display: flex;
  font-size: 32px;
  opacity: 0;
`;

const Content = styled.div`
  overflow: hidden;
  
  .word{
    padding-right: 6px;
  }
`;

const TextReveal = () => {
  // console.log('Another console log ');
  //
  // const splitTextRef = useRef();

  const [timeline] = useState(new TimelineLite({ paused: true }));

  // const [splitText] = useState(new SplitText(splitTextRef.current, { type: 'words, lines' }));
  // const [isWaypointActive, setIsWaypointActive] = useState(true);
  // // this.mySplitText = new SplitText(this.splitThisText, { type: 'words, lines' });
  // // this.splitTextTimeline = new TimelineLite({ immediateRender: false });
  //
  // const props = {
  //   duration: 0.5,
  //   stagger: 0.2,
  //   waypointTopOffset: '0%',
  //   waypointBottomOffset: '20%',
  //   forwardSpeed: 1,
  //   reverseSpeed: 0.5,
  // };
  //
  // // constructor(props) {
  // //   super(props);
  // //
  // //   this.revealText = this.revealText.bind(this);
  // //   this.destroySplitText = this.destroySplitText.bind(this);
  // //   this.mySplitText = null;
  // //   this.splitTextTimeline = null;
  // // }
  //
  // // state = { waypointActive: true };
  //
  // const destroySplitText = () => {
  //   setIsWaypointActive(false);
  //   splitText.revert();
  // };
  //
  // useEffect(() => {
  //   timeline.addLabel('start')
  //     .set(splitText.lines, { perspective: 400, overflow: 'hidden' }, 'start')
  //     .set(splitTextRef.current, { opacity: 1 }, 'start')
  //     .staggerFromTo(
  //       splitText.words,
  //       props.duration,
  //       {
  //         y: '100%',
  //         transformOrigin: 'top center -150',
  //       },
  //       {
  //         y: '0%',
  //         force3D: true,
  //       },
  //       props.stagger,
  //       'start',
  //     );
  //
  //   return () => destroySplitText();
  // }, []);
  //
  // // componentDidMount() {
  // //   // this.mySplitText = new SplitText(this.splitThisText, { type: 'words, lines' });
  // //   // this.splitTextTimeline = new TimelineLite({ immediateRender: false });
  // //
  // //   this.splitTextTimeline
  // //     .addLabel('start')
  // //     .set(this.mySplitText.lines, { perspective: 400, overflow: 'hidden' }, 'start')
  // //     .set(this.splitThisText, { opacity: 1 }, 'start')
  // //     .staggerFromTo(
  // //       this.mySplitText.words,
  // //       this.props.duration,
  // //       {
  // //         y: '100%',
  // //         transformOrigin: 'top center -150'
  // //       },
  // //       {
  // //         y: '0%',
  // //         force3D: true
  // //       },
  // //       this.props.stagger,
  // //       'start'
  // //     );
  // // }
  //
  // // componentWillUnmount() {
  // //   this.destroySplitText();
  // // }
  // //
  // // destroySplitText() {
  // //   this.setState({ waypointActive: false });
  // //   this.mySplitText.revert();
  // // }
  //
  // // revealText(direction: string) {
  // //   if (direction === 'enter') {
  // //     this.splitTextTimeline.play(0).timeScale(this.props.forwardSpeed);
  // //   } else {
  // //     this.splitTextTimeline.reverse().timeScale(this.props.reverseSpeed);
  // //   }
  // // }
  //
  // const revealText = (direction) => {
  //   if (direction === 'enter') {
  //     timeline.play(0).timeScale(props.forwardSpeed);
  //   } else {
  //     timeline.reverse().timeScale(props.reverseSpeed);
  //   }
  // };
  //
  // return (
  //   <>
  //     {isWaypointActive && (
  //       <Waypoint
  //         // onEnter={this.revealText.bind(this, 'enter')}
  //         onEnter={() => revealText('enter')}
  //         // onLeave={this.revealText.bind(this, 'leave')}
  //         onLeave={() => revealText('leave')}
  //         topOffset={props.waypointTopOffset}
  //         bottomOffset={props.waypointBottomOffset}
  //         scrollableAncestor={window}
  //       />
  //     )}
  //     <div
  //       ref={(x) => { splitTextRef.current = x; }}
  //       style={{ opacity: 0 }}
  //     >
  //       Ciao
  //     </div>
  //   </>
  // );
  const textRef = useRef();

  const timelineSettings = {
    staggerValue: 0.014,
    charsDuration: 2.5,
  };

  useEffect(() => {
    // Splitting();
    const results = Splitting({ target: textRef.current, by: 'lines' });
    console.log(results);

    console.log(textRef.current.querySelectorAll('div > .char, .whitespace'));

    //Link
    // https://github.com/codrops/TypographyMotion/blob/master/src/js/index.js
    //   https://tympanus.net/Tutorials/TypographyMotion/

    // results?.[0].lines.forEach((line) => {
    //   line.forEach((word) => {
    //     new TimelineLite().addLabel('start')
    //       // Stagger the animation of the home section chars
    //       .staggerTo(word, timelineSettings.charsDuration, {
    //         ease: Power3.easeIn,
    //         y: '-100%',
    //         opacity: 0,
    //       }, timelineSettings.staggerValue, 'start');
    //   });
    // });
    timeline
      .addLabel('start')
      // Stagger the animation of the home section chars
      // .staggerTo(textRef.current, timelineSettings.charsDuration, {
      //   ease: Power3.easeIn,
      //   y: '-100%',
      //   opacity: 0,
      // }, timelineSettings.staggerValue, 'start');
    // Here we do the switch
    // We need to toggle the current class for the content sections
      .addLabel('switchtime')
    // .add( () => {
    //   DOM.content.home.section.classList.toggle('content__item--current');
    //   DOM.content.about.section.classList.toggle('content__item--current');
    // })
    // // Change the body's background color
    // .to(document.body, {
    //   duration: 0.8,
    //   ease: 'Power1.easeInOut',
    //   backgroundColor: '#c3b996'
    // }, 'switchtime-=timelineSettings.charsDuration/4')
    // // Start values for the about section elements that will animate in
      .set(textRef.current, {
        y: '100%',
        opacity: 1,
      }, 'switchtime')
    // .set(DOM.content.about.picture, {
    //   y: '40%',
    //   rotation: -4,
    //   opacity: 0
    // }, 'switchtime')
    // // Stagger the animation of the about section chars
    //   .staggerFrom(textRef.current, timelineSettings.charsDuration, {
    //     ease: Power3.easeOut,
    //     y: '-100%',
    //   }, timelineSettings.staggerValue)
      .staggerTo(textRef.current, timelineSettings.charsDuration, {
        ease: Power3.easeOut,
        y: '0%',
      }, timelineSettings.staggerValue, 'switchtime');
    // // Finally, animate the picture in
    // .to( DOM.content.about.picture, 0.8, {
    //   ease: 'Power3.easeOut',
    //   y: '0%',
    //   opacity: 1,
    //   rotation: 0
    // }, 'switchtime+=0.6');
  }, []);

  return (
    <Content>
      <Container ref={textRef} onClick={timeline.play()}>
        Ciao a tutti Come va la vita
      </Container>
    </Content>

  );
};

export default TextReveal;
