import React from 'react';
import styled from 'styled-components';
import { MediaQuerySelector } from '../utils/responsive';
import MenuItem from '../components/MenuItem';
import useCursorRef from '../context/useCursorRef';

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

const Anchor = styled.a`
  text-decoration: unset;
  color: inherit;
  cursor: none;
`;

const Link = () => {
  const { ref } = useCursorRef();

  const handleHover = () => {
    ref.current.classList.add('link');
    ref.current.classList.add('big');
    ref.current.offsetParent.classList.add('noMix');
  };

  const handleLeave = () => {
    ref.current.classList.remove('link');
    ref.current.classList.remove('big');
    ref.current.offsetParent.classList.remove('noMix');
  };

  return (
    <Left>
      <Social>
        <SocialLink
          size={16}
          rotation={-90}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <Anchor href="https://github.com/marcosansoni" target="_blank">Github</Anchor>
        </SocialLink>
        <SocialLink size={16} rotation={-90} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <Anchor href="https://www.linkedin.com/in/marco-sansoni" target="_blank">LinkedIn</Anchor>
        </SocialLink>
        <SocialLink size={16} rotation={-90} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <Anchor href="mailto:marco.sansoni.1995@gmail.com">Email</Anchor>
        </SocialLink>
      </Social>
    </Left>
  );
};

export default Link;
