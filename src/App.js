import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import Color from './assets/theme/Color';
import Link from './pages/Link';
// import { MediaQuerySelector } from './utils/responsive';
import Landing from './pages/Landing';
import About from './pages/About';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  display: flex;
  background-color: ${Color.WHITE};
`;

const Content = styled.div`
  //padding: 64px 96px 64px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  
`;

const App = () => {
  console.log('Composer of the application');

  const contentRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        scrollRef.current.style.transform = `rotate(${202 + (contentRef.current.scrollTop / 3)}deg)`;
      });
    };

    contentRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      contentRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Page>
      {/* <NavigationMenuFullPage /> */}
      <Link />
      <Content ref={contentRef}>
        <Landing ref={scrollRef} />
        <About />
      </Content>
    </Page>
  );
};

export default App;
