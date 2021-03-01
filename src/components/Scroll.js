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
      <svg width={`${size}px`} height={`${size}px`} viewBox="-48 -48 200 200">
        <path id="curve" fill="transparent" d="M105 54.5C105 83.53 81.9079 107 53.5 107C25.0921 107 2 83.53 2 54.5C2 25.47 25.0921 2 53.5 2C81.9079 2 105 25.47 105 54.5Z" />
        <text fontSize="24">
          <textPath xlinkHref="#curve">
            Scroll down
          </textPath>
          <textPath xlinkHref="#curve" startOffset="160">
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
