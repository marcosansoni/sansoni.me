import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import hamburger from '../lottie/hamburger.json';

const Container = styled.div``;

const Hamburger = forwardRef((props, ref) => {
  const { onToggle } = props;
  const width = 48;
  const height = 48;

  const [isStop, setIsStop] = useState(true);
  const [direction, setDirection] = useState(1);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: hamburger,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const onComplete = () => {
    setIsStop((current) => !current);
    setDirection((dir) => (dir === 1 ? -1 : 1));
    if (onToggle) onToggle();
  };

  return (
    <Container onClick={() => setIsStop(false)} ref={ref}>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        isPaused={isStop}
        direction={direction}
        speed={2}
        isClickToPauseDisabled
        eventListeners={[{
          eventName: 'complete',
          callback: onComplete,
        }]}
      />
    </Container>
  );
});

Hamburger.propTypes = {
  onToggle: PropTypes.func,
};

Hamburger.defaultProps = {
  onToggle: undefined,
};

export default Hamburger;
