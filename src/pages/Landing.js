import React, { forwardRef } from 'react';
import styled from 'styled-components';
import MenuItem from '../components/MenuItem';
import { MediaQuerySelector } from '../utils/responsive';
import Logo from '../components/Logo';
import Scroll from '../components/Scroll';
import NavigationMenuFullPage from '../components/NavigationMenuFullPage';
import Hello from '../components/Hello';
import useCursorRef from '../context/useCursorRef';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  position: relative;
  padding: 64px 96px 64px 0;

  ${MediaQuerySelector.SMALL} {
    padding: 24px 48px 24px 0;
  }

  ${MediaQuerySelector.MEDIUM} {
    padding: 36px 64px 36px 0;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  animation: showingAfterHello 2s forwards 3.5s;

  @keyframes showingAfterHello {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${MediaQuerySelector.SMALL} {
    height: 48px;
  }

  ${MediaQuerySelector.MEDIUM} {
    height: 64px;
  }
`;

const Links = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  ${MediaQuerySelector.SMALL} {
    display: none;
  }
`;

const ScrollContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  overflow: hidden;
  padding-right: 96px;
  opacity: 0;
  animation: showingAfterHello 2s forwards 3.5s;

  @keyframes showingAfterHello {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${MediaQuerySelector.SMALL} {
    padding-right: 48px;
  }

  ${MediaQuerySelector.MEDIUM} {
    padding-right: 64px;
  }
`;

const HelloContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-right: 96px;

  ${MediaQuerySelector.SMALL} {
    padding-right: 48px;
  }

  ${MediaQuerySelector.MEDIUM} {
    padding-right: 64px;
  }
`;

const Landing = forwardRef((props, ref) => {
  const { ref: cursorRef, handleHover: handleHoverRef, handleLeave: handleLeaveRef } = useCursorRef();

  const handleHover = () => {
    cursorRef.current.classList.add('link');
    cursorRef.current.classList.add('big');
    cursorRef.current.offsetParent.classList.add('noMix');
  };

  const handleLeave = () => {
    cursorRef.current.classList.remove('link');
    cursorRef.current.classList.remove('big');
    cursorRef.current.offsetParent.classList.remove('noMix');
  };

  const handleClickLink = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Container>
        <NavigationMenuFullPage />
        <Top>
          <Logo />
          <Links>
            <MenuItem
              style={{ paddingLeft: 32 }}
              size={26}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              onClick={() => handleClickLink('#aboutPage')}
            >
              ABOUT
            </MenuItem>
            <MenuItem
              style={{ paddingLeft: 32 }}
              size={26}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              onClick={() => handleClickLink('#workPage')}
            >
              WORK
            </MenuItem>
            <MenuItem
              style={{ paddingLeft: 32 }}
              size={26}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              onClick={() => handleClickLink('#educationPage')}
            >
              EDUCATION
            </MenuItem>
          </Links>
        </Top>
        <HelloContainer>
          <Hello />
        </HelloContainer>
        <ScrollContainer
          onMouseEnter={() => handleHoverRef('text')}
          onMouseLeave={() => handleLeaveRef('text')}
        >
          <Scroll size={120} ref={ref} />
        </ScrollContainer>
      </Container>
    </>
  );
});

export default Landing;
