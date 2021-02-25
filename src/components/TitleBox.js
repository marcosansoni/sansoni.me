import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Power3 } from 'gsap';
import PropTypes from 'prop-types';
import Color from '../assets/theme/Color';

const Cover = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  //width: 300px;
  //height: 96px;
  box-sizing: border-box;
  //max-width: 100%;
  //max-height: 100%;
  background-color: ${Color.DARK_ORANGE};
  color: ${Color.DARK_ORANGE};
  user-select: none;
  z-index: 13;
  padding: 16px 32px;
  font-size: 48px;
  font-weight: bold;
`;

const FullPage = styled.div`
  //height: 96px;
  overflow: hidden;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  //width: auto;
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  color: ${Color.WHITE};
  background-color: ${Color.BLACK};
  user-select: none;
  padding: 16px 32px;
`;

const Container = styled.div``;

const TitleBox = (props) => {
  const { timeline, children } = props;

  const covers = useRef();
  const menuRef = useRef();

  // const [timeline] = useState(new TimelineLite({ paused: true }));

  useEffect(() => {
    if (covers.current.style) {
      covers.current.style.display = 'block';
    }
  }, [covers]);

  useEffect(() => {
    console.log(timeline);
    if (timeline) {
      timeline
        // .to({}, 2, {})
        // .set(covers.current, { display: 'block' }, 0.2)
        .staggerFrom(covers.current, 0.3, {
          scaleX: 0,
          ease: Power3.easeOut,
          transformOrigin: 'center left',
        }, 0.2)
        // .set(menuRef.current, { display: 'flex' }, 0.2)
        .set(menuRef.current, { opacity: 1 })
        .staggerTo(covers.current, 0.3, {
          scaleX: 0,
          ease: Power3.easeOut,
          transformOrigin: 'center right',
        }, 0.2);
    }
  }, [timeline]);

  // const onClick = () => timeline.play();

  console.log(children, timeline);

  return (
    <Container>
      <Cover className="rev-cover" ref={covers}>
        <div>WHO I AM</div>
      </Cover>
      <FullPage ref={menuRef}>
        <div>WHO I AM</div>
      </FullPage>
    </Container>
  );
};

TitleBox.propTypes = {
  children: PropTypes.string,
  timeline: PropTypes.element,
};

TitleBox.defaultProps = {
  children: undefined,
  timeline: undefined,
};

export default TitleBox;
