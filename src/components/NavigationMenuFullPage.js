import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
// import * as reveal from 'revealfx';
import { Power3, TimelineLite } from 'gsap';
import Hamburger from './Hamburger';

const Container = styled.div``;

const Cover = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  background-color: #137992;
`;

const FullPage = styled.div`
  background-color: red;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  //width: 100%;
  overflow: hidden;
  width: 0;
`;

const HamburgerContainer = styled.div`
  position: absolute;
  top:24px;
  right:24px;
`;

const NavigationMenuFullPage = () => {
  console.log('AAA');

  const covers = useRef();
  const menuRef = useRef();
  const [timeline] = useState(new TimelineLite({ paused: true, onUpdate: () => console.log(covers) }));
  // const revealer = new RevealF

  // useEffect(() => {
  //   if (!revealer.current && menuRef.current) {
  //     console.log('Here');
  //     revealer.current = new window.RevealFx(menuRef.current);
  //   }
  // }, []);

  useEffect(() => {
    if (timeline) {
      timeline
        .staggerFrom(covers.current, 0.3, { scaleX: 0, ease: Power3.easeOut, transformOrigin: 'center left' }, 0.2)
        .staggerTo(covers.current, 0.3, { scaleX: 0, ease: Power3.easeOut, transformOrigin: 'center right' }, 0.2);
    }
  }, [timeline]);

  // var navEl = document.querySelector('nav.menu'),
  //   revealer = new RevealFx(navEl),
  //   closeCtrl = navEl.querySelector('.btn--close');
  //
  // document.querySelector('.btn--menu').addEventListener('click', function() {
  //   revealer.reveal({
  //     bgcolor: '#7f40f1',
  //     duration: 400,
  //     easing: 'easeInOutCubic',
  //     onCover: function(contentEl, revealerEl) {
  //       navEl.classList.add('menu--open');
  //       contentEl.style.opacity = 1;
  //     },
  //     onComplete: function() {
  //       closeCtrl.addEventListener('click', closeMenu);
  //     }
  //   });
  // });
  //
  // function closeMenu() {
  //   closeCtrl.removeEventListener('click', closeMenu);
  //   navEl.classList.remove('menu--open');
  //   revealer.reveal({
  //     bgcolor: '#7f40f1',
  //     duration: 400,
  //     easing: 'easeInOutCubic',
  //     onCover: function(contentEl, revealerEl) {
  //       navEl.classList.remove('menu--open');
  //       contentEl.style.opacity = 0;
  //     }
  //   });
  // }
  console.log(covers);

  const handleOpenMenu = () => {
    timeline.play();
    // anime;
    // reveal({
    //   bgcolor: '#7f40f1',
    //   duration: 400,
    //   easing: 'easeInOutCubic',
    //   onCover: () => console.log('cover'),
    //   // onCover(contentEl, revealerEl) {
    //   //   navEl.classList.add('menu--open');
    //   //   contentEl.style.opacity = 1;
    //   // },
    //   // onComplete() {
    //   //   closeCtrl.addEventListener('click', closeMenu);
    //   // },
    // });
  };

  return (
    <Container>
      {/* <nav className="menu" ref={}> */}
      {/*  <div>X</div> */}
      {/*  <ul className="menu__inner"> */}
      {/*    <li className="menu__item"><a className="menu__link" href="#">Work</a></li> */}
      {/*    <li className="menu__item"><a className="menu__link" href="#">Play</a></li> */}
      {/*    <li className="menu__item"><a className="menu__link" href="#">Chat</a></li> */}
      {/*    <li className="menu__item"><a className="menu__link" href="#">Party</a></li> */}
      {/*  </ul> */}
      {/* </nav> */}
      <HamburgerContainer onClick={handleOpenMenu}>
        <Hamburger />
      </HamburgerContainer>
      <Cover className="rev-cover" ref={covers} />
      <FullPage ref={menuRef}>
        A
      </FullPage>
    </Container>
  );
};

export default NavigationMenuFullPage;
