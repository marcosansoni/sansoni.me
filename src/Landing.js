import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Color from './assets/theme/Color';
import MenuItem from './components/MenuItem';
import { MediaQuerySelector } from './utils/responsive';
import NavigationMenuFullPage from './components/NavigationMenuFullPage';
import Scroll from './components/Scroll';
import About from './pages/About';
import Hello from './pages/Landing';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left:0;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${Color.WHITE};
  position: absolute;
  display: flex;
  overflow-y: auto;
`;

const Left = styled.div`
  width: 96px;
  height: 100%;
  display: flex;
  align-items: flex-end;
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

  ${MediaQuerySelector.SMALL}{
    width: 48px;
  }
  
  ${MediaQuerySelector.MEDIUM}{
    width: 64px;
  }

`;

const Right = styled.div`
  padding: 64px 96px 64px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${MediaQuerySelector.SMALL}{
    padding: 24px 48px 24px 0;
  }

  ${MediaQuerySelector.MEDIUM}{
    padding: 36px 64px 36px 0;
  }
`;

// const Top = styled.div`
//   width: 100%;
//   height: 72px;
//   display: flex;
//   justify-content: space-between;
//   opacity: 0;
//   animation: showingAfterHello 2s forwards 3.5s;
//
//   @keyframes showingAfterHello {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//
//   ${MediaQuerySelector.SMALL}{
//     height: 48px;
//   }
//
//   ${MediaQuerySelector.MEDIUM}{
//     height: 64px;
//   }
// `;
//
// const Links = styled.div`
//   display: flex;
//   height: 100%;
//   justify-content: flex-end;
//   align-items: center;
//
//   ${MediaQuerySelector.SMALL} {
//     display: none;
//   }
// `;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;

  ${MediaQuerySelector.SMALL}{
    padding-bottom: 36px;
  }

  ${MediaQuerySelector.MEDIUM}{
    padding-bottom: 48px;
  }
`;

// const HelloContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

const SocialLink = styled(MenuItem)`
  padding-bottom: 96px;

  :last-child {
    padding-bottom: 0;
  }

  ${MediaQuerySelector.SMALL}{
    padding-bottom: 64px;
  }

  ${MediaQuerySelector.MEDIUM}{
    padding-bottom: 72px;
  }
`;

const ScrollContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  overflow: hidden;
`;

// const VeryLongContent = styled.div`
//   height: 300vh;
//   background-color: lightcyan;
// `;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  position: fixed;
`;

const Landing = () => {
  const rotateScrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        console.log(window.scrollY);
        rotateScrollRef.current.style.transform = `rotate(${202 + (window.scrollY / 3)}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Page>
      <ScrollContainer>
        <Scroll size={120} ref={rotateScrollRef} />
      </ScrollContainer>
      <NavigationMenuFullPage />
      <Container>
        <Left>
          <Social>
            <SocialLink size={16} rotation={-90}>Github</SocialLink>
            <SocialLink size={16} rotation={-90}>LinkedIn</SocialLink>
            <SocialLink size={16} rotation={-90}>Mail</SocialLink>
          </Social>
        </Left>
        <Right>
          {/* <Top> */}
          {/*  <Logo /> */}
          {/*  <Links> */}
          {/*    <MenuItem style={{ paddingLeft: 32 }} size={26}>ABOUT</MenuItem> */}
          {/*    <MenuItem style={{ paddingLeft: 32 }} size={26}>WORK</MenuItem> */}
          {/*    <MenuItem style={{ paddingLeft: 32 }} size={26}>EDUCATION</MenuItem> */}
          {/*  </Links> */}
          {/* </Top> */}
          {/* <HelloContainer> */}
          {/*  <Hello /> */}
          {/* </HelloContainer> */}
          {/* <div style={{ height: '100%' }}>C</div> */}
          <Hello />
          <About />
        </Right>
      </Container>
    </Page>
  );
};

export default Landing;
