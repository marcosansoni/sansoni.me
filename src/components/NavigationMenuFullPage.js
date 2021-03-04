import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap, { Power3 } from 'gsap';
import Hamburger from './Hamburger';
import Color from '../assets/theme/Color';
import { MediaQuerySelector } from '../utils/responsive';
import useCursorRef from '../context/useCursorRef';
import MenuItem from './MenuItem';

const Container = styled.div`
  ${MediaQuerySelector.MEDIUM_AND_LARGE} {
    display: none;
  }
`;

const Cover = styled.div`
  display: none;
  position: fixed;
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
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
`;

const HamburgerContainer = styled.div`
  position: absolute;
  z-index: 20;
  opacity: 0;
  animation: showingAfterHello 2s forwards 3.7s;
  right: 96px;
  top: 64px;
  
  ${MediaQuerySelector.SMALL} {
    right: 36px;
    top: 24px;
  }

  ${MediaQuerySelector.MEDIUM} {
    right: 48px;
    top: 36px;
  }
  

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
  const { ref: cursorRef, handleLeave, handleHover } = useCursorRef();

  const [timeline] = useState(gsap.timeline({ paused: true }));

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (timeline) {
      timeline
        .from(covers.current, {
          duration: 0.3,
          scaleX: 0,
          ease: Power3.easeOut,
          transformOrigin: 'center left',
        })
        .set(menuRef.current, { opacity: 1, zIndex: 10 })
        .to(covers.current, {
          duration: 0.3,
          scaleX: 0,
          ease: Power3.easeOut,
          transformOrigin: 'center right',
        }, 0.4);
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

  const handleHoverLink = () => {
    cursorRef.current.classList.add('link');
    cursorRef.current.classList.add('big');
    cursorRef.current.offsetParent.classList.add('noMix');
  };

  const handleLeaveLink = () => {
    cursorRef.current.classList.remove('link');
    cursorRef.current.classList.remove('big');
    cursorRef.current.offsetParent.classList.remove('noMix');
  };

  const handleClickLink = (id) => {
    hamburgerRef.current?.click?.();
    handleToggle();
    handleLeaveLink();
    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <Container>
      <HamburgerContainer
        onClick={handleToggle}
        onMouseEnter={() => handleHover('text')}
        onMouseLeave={() => handleLeave('text')}
      >
        <Hamburger ref={hamburgerRef} />
      </HamburgerContainer>
      <Cover className="rev-cover" ref={covers} />
      <FullPage ref={menuRef}>
        <MenuItem
          style={{ padding: 24 }}
          size={26}
          onMouseEnter={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          onClick={() => handleClickLink('#aboutPage')}
        >
          ABOUT
        </MenuItem>
        <MenuItem
          style={{ padding: 24 }}
          size={26}
          onMouseEnter={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          onClick={() => handleClickLink('#workPage')}
        >
          WORK
        </MenuItem>
        <MenuItem
          style={{ padding: 24 }}
          size={26}
          onMouseEnter={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          onClick={() => handleClickLink('#educationPage')}
        >
          EDUCATION
        </MenuItem>
      </FullPage>
    </Container>
  );
};

export default NavigationMenuFullPage;
