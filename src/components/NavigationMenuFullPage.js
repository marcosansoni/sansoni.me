import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Power3, TimelineLite } from 'gsap';
import Hamburger from './Hamburger';
import Color from '../assets/theme/Color';
import { MediaQuerySelector } from '../utils/responsive';

const Container = styled.div`
  ${MediaQuerySelector.MEDIUM_AND_LARGE} {
    display: none;
  }
`;

const Cover = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  background-color: ${Color.DARK_ORANGE};
  z-index: 13;
`;

const FullPage = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 100vw;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
`;

const Item = styled.div`
  font-size: 26px;
  padding: 24px;
  z-index: 21;
`;

const HamburgerContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 20;
  opacity: 0;
  animation: showingAfterHello 2s forwards 3.7s;

  @keyframes showingAfterHello {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const NavigationMenuFullPage = () => {
  const covers = useRef();
  const menuRef = useRef();
  const hamburgerRef = useRef();

  const [timeline] = useState(new TimelineLite({ paused: true }));

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (timeline) {
      timeline
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

  const handleToggle = () => {
    if (!isOpen) {
      timeline.play();
    } else {
      timeline.reverse();
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (covers.current.style) {
      covers.current.style.display = 'block';
    }
  }, [covers]);

  const handleClickAbout = () => {
    hamburgerRef.current?.click?.();
    handleToggle();
  };

  return (
    <Container>
      <HamburgerContainer onClick={handleToggle}>
        <Hamburger ref={hamburgerRef} />
      </HamburgerContainer>
      <Cover className="rev-cover" ref={covers} />
      <FullPage ref={menuRef}>
        <Item onClick={handleClickAbout}>ABOUT</Item>
        <Item>WORK</Item>
        <Item>EDUCATION</Item>
      </FullPage>
    </Container>
  );
};

export default NavigationMenuFullPage;
