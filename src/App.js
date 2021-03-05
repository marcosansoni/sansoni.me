import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import Color from './assets/theme/Color';
import Link from './pages/Link';
import Landing from './pages/Landing';
import About from './pages/About';
import Cursor from './components/Cursor';
import Work from './pages/Work';
import Education from './pages/Education';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  display: flex;
  background-color: ${Color.WHITE};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: enableOverflow 3s forwards 3s;

  @keyframes enableOverflow {
    to {
      overflow-y: auto;
    }
  }
`;

const App = () => {
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
    <Cursor>
      <Page>
        <Link />
        <Content ref={contentRef}>
          <Landing ref={scrollRef} />
          <About />
          <Work />
          <Education />
        </Content>
      </Page>
    </Cursor>
  );
};

export default App;
