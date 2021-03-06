import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Power3 } from 'gsap';
import PropTypes from 'prop-types';
import Color from '../assets/theme/Color';
import { MediaQuerySelector } from '../utils/responsive';

const Cover = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  background-color: ${Color.DARK_ORANGE};
  color: ${Color.DARK_ORANGE};
  z-index: 13;
  padding: 16px 32px;

  ${MediaQuerySelector.MEDIUM} {
    padding: 12px 24px;
  }

  ${MediaQuerySelector.SMALL} {
    padding: 8px 16px;
  }
`;

const FullPage = styled.div`
  overflow: hidden;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  color: ${Color.WHITE};
  background-color: ${Color.BLACK};
  padding: 16px 32px;

  ${MediaQuerySelector.MEDIUM} {
    padding: 12px 24px;
  }

  ${MediaQuerySelector.SMALL} {
    padding: 8px 16px;
  }
`;

const Container = styled.div`
  position: relative;
  font-size: 48px;
  font-weight: bold;
  user-select: none;
  padding: 16px 32px;

  ${MediaQuerySelector.MEDIUM} {
    padding: 12px 24px;
    font-size: 32px;
  }

  ${MediaQuerySelector.SMALL} {
    padding: 8px 16px;
    font-size: 24px;
  }
  
  #cover{
    
  }
`;

const TitleBox = (props) => {
  const {
    timeline,
    children,
    style,
    className,
  } = props;

  const covers = useRef();
  const menuRef = useRef();

  useEffect(() => {
    if (covers.current.style) {
      covers.current.style.display = 'block';
    }
  }, [covers]);

  useEffect(() => {
    if (timeline) {
      // .staggerFrom(covers.current, 0.3, {
      //   scaleX: 0,
      //   ease: Power3.easeOut,
      //   transformOrigin: 'center left',
      // }, 0.2)
      // .set(menuRef.current, { opacity: 1 })
      // .staggerTo(covers.current, 0.3, {
      //   scaleX: 0,
      //   ease: Power3.easeOut,
      //   transformOrigin: 'center right',
      // }, 0.2);
      timeline
        .from(covers.current, {
          scaleX: 0,
          duration: 0.3,
          ease: Power3.easeOut,
          transformOrigin: 'center left',
          stagger: 0.2,
        })
        .set(menuRef.current, { opacity: 1 })
        .to(covers.current, {
          duration: 0.3,
          scaleX: 0,
          ease: Power3.easeOut,
          transformOrigin: 'center right',
          stagger: 0.2,
        });
    }
  }, [timeline]);

  return (
    <Container style={style} className={className}>
      <Cover ref={covers} id="cover">
        <div>{children}</div>
      </Cover>
      <FullPage ref={menuRef} id="fullPage">
        <div>{children}</div>
      </FullPage>
    </Container>
  );
};

TitleBox.propTypes = {
  children: PropTypes.any,
  timeline: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
};

TitleBox.defaultProps = {
  children: undefined,
  timeline: undefined,
  style: undefined,
  className: undefined,
};

export default TitleBox;
