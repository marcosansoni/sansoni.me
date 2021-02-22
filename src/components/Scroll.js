import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  transform: rotate(202deg);
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.size}px`};
  user-select: none;
`;

const Scroll = forwardRef((props, ref) => {
  const { size } = props;

  return (
    <Container size={size} ref={ref}>
      {/* <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" fill="transparent"> */}
      {/*  /!* <path d="M105 54.5C105 83.53 81.9079 107 53.5 107C25.0921 107 2 83.53 2 54.5C2 25.47 25.0921 2 53.5 2C81.9079 2 105 25.47 105 54.5Z" stroke="black" strokeWidth="4" /> *!/ */}
      {/*  <path d=" M 96 64 A 32 32 0 1 1 96 63" fill="none" stroke="red" /> */}
      {/*  /!* <path d=" M 96 64 A 32 32 0 1 1 96 63" /> *!/ */}
      {/*  <text y="40" fontSize="32"> */}
      {/*    Ciao a tutti */}
      {/*  </text> */}
      {/* </svg> */}
      <svg width={`${size}px`} height={`${size}px`} viewBox="-48 -48 200 200">
        {/* <path d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" /> */}
        <path id="curve" fill="transparent" d="M105 54.5C105 83.53 81.9079 107 53.5 107C25.0921 107 2 83.53 2 54.5C2 25.47 25.0921 2 53.5 2C81.9079 2 105 25.47 105 54.5Z" />
        <text fontSize="24">
          <textPath xlinkHref="#curve">
            Scroll down
          </textPath>
        </text>
      </svg>
    </Container>
  );
});

Scroll.propTypes = {
  size: PropTypes.number,
};

Scroll.defaultProps = {
  size: 120,
};

export default Scroll;
