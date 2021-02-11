import React from 'react';
import styled from 'styled-components';
import Color from './assets/theme/Color';
import Hello from './components/Hello';
import Logo from './components/Logo';
import MenuItem from './components/MenuItem';
import { MediaQuerySelector } from './utils/responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${Color.WHITE};
  position: absolute;
  display: flex;
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

  ${MediaQuerySelector.SMALL}{
    height: 48px;
  }

  ${MediaQuerySelector.MEDIUM}{
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

const HelloContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const Landing = () => (
  <Container>
    <Left>
      <Social>
        <SocialLink size={16} rotation={-90}>Github</SocialLink>
        <SocialLink size={16} rotation={-90}>LinkedIn</SocialLink>
        <SocialLink size={16} rotation={-90}>Mail</SocialLink>
      </Social>
    </Left>
    <Right>
      <Top>
        <Logo />
        <Links>
          <MenuItem style={{ paddingLeft: 32 }} size={26}>ABOUT</MenuItem>
          <MenuItem style={{ paddingLeft: 32 }} size={26}>WORK</MenuItem>
          <MenuItem style={{ paddingLeft: 32 }} size={26}>EDUCATION</MenuItem>
        </Links>
      </Top>
      <HelloContainer>
        <Hello />
      </HelloContainer>
    </Right>
  </Container>
);

export default Landing;
