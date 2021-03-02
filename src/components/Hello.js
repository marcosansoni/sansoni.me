import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ResizeObserver from 'resize-observer-polyfill';
import Color from '../assets/theme/Color';
import { Breakpoint } from '../utils/responsive';
import useCursorRef from '../context/useCursorRef';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  #hello {
    animation: fillHello 2s forwards 3s;
  }

  #hello path:nth-child(1) {
    stroke-dasharray: 410px;
    stroke-dashoffset: 410px;
    animation: lineAnimation 3s forwards;
  }

  #hello path:nth-child(2) {
    stroke-dasharray: 384px;
    stroke-dashoffset: 384px;
    animation: lineAnimation 3s forwards 0.3s;
  }

  #hello path:nth-child(3) {
    stroke-dasharray: 275px;
    stroke-dashoffset: 275px;
    animation: lineAnimation 3s forwards 0.6s;
  }

  #hello path:nth-child(4) {
    stroke-dasharray: 275px;
    stroke-dashoffset: 275px;
    animation: lineAnimation 3s forwards 0.9s;
  }

  #hello path:nth-child(5) {
    stroke-dasharray: 398px;
    stroke-dashoffset: 398px;
    animation: lineAnimation 3s forwards 1.2s;
  }

  @keyframes lineAnimation {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fillHello {
    from {
      fill: transparent;
    }
    to {
      fill: ${Color.BLACK};
    }
  }
`;

const Hello = () => {
  const [width, setWidth] = useState(0);
  const { handleLeave, handleHover } = useCursorRef();

  const widthObserver = useMemo(() => new ResizeObserver(
    (entries) => entries.forEach((entry) => {
      const { width: widthWindow } = entry.contentRect;
      if (widthWindow <= Number(Breakpoint.SM)) {
        setWidth(165);
      } else if (widthWindow <= Number(Breakpoint.LG)
        && widthWindow >= Number(Breakpoint.SM)) {
        setWidth(220);
      } else {
        setWidth(291);
      }
    }),
  ), []);

  useEffect(() => {
    widthObserver.observe(document.body);
  }, []);

  return (
    <Container
      onMouseEnter={() => handleHover('text')}
      onMouseLeave={() => handleLeave('text')}
    >
      <svg
        id="hello"
        width={width}
        height={(width * 101) / 291}
        viewBox="-5 0 291 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.25 0.25C34.61 0.25 33.125 1.735 33.125 4.375V37.375C33.125 40.015 31.64 41.5 29 41.5H20.75C18.11 41.5 16.625 40.015 16.625 37.375V4.375C16.625 1.735 15.14 0.25 12.5 0.25H4.25C1.61 0.25 0.125 1.735 0.125 4.375V86.875C0.125 89.515 1.61 91 4.25 91H12.5C15.14 91 16.625 89.515 16.625 86.875V62.125C16.625 59.485 18.11 58 20.75 58H29C31.64 58 33.125 59.485 33.125 62.125V86.875C33.125 89.515 34.61 91 37.25 91H45.5C48.14 91 49.625 89.515 49.625 86.875V4.375C49.625 1.735 48.14 0.25 45.5 0.25H37.25Z"
          stroke="black"
          strokeWidth="1"
        />
        <path
          d="M103.186 16.75C105.826 16.75 107.311 15.265 107.311 12.625V4.375C107.311 1.735 105.826 0.25 103.186 0.25H74.3105C63.5855 0.25 57.8105 6.025 57.8105 16.75V74.5C57.8105 85.225 63.5855 91 74.3105 91H103.186C105.826 91 107.311 89.515 107.311 86.875V78.625C107.311 75.985 105.826 74.5 103.186 74.5H78.4355C75.7955 74.5 74.3105 73.015 74.3105 70.375V62.125C74.3105 59.485 75.7955 58 78.4355 58H103.186C105.826 58 107.311 56.515 107.311 53.875V45.625C107.311 42.985 105.826 41.5 103.186 41.5H78.4355C75.7955 41.5 74.3105 40.015 74.3105 37.375V20.875C74.3105 18.235 75.7955 16.75 78.4355 16.75H103.186Z"
          stroke="black"
          strokeWidth="1"
        />
        <path
          d="M136.121 74.5C133.481 74.5 131.996 73.015 131.996 70.375V4.375C131.996 1.735 130.511 0.25 127.871 0.25H119.621C116.981 0.25 115.496 1.735 115.496 4.375V74.5C115.496 85.225 121.271 91 131.996 91H164.996C167.636 91 169.121 89.515 169.121 86.875V78.625C169.121 75.985 167.636 74.5 164.996 74.5H136.121Z"
          stroke="black"
          strokeWidth="1"
        />
        <path
          d="M193.807 74.5C191.167 74.5 189.682 73.015 189.682 70.375V4.375C189.682 1.735 188.197 0.25 185.557 0.25H177.307C174.667 0.25 173.182 1.735 173.182 4.375V74.5C173.182 85.225 178.957 91 189.682 91H222.682C225.322 91 226.807 89.515 226.807 86.875V78.625C226.807 75.985 225.322 74.5 222.682 74.5H193.807Z"
          stroke="black"
          strokeWidth="1"
        />
        <path
          d="M230.867 74.5C230.867 85.225 236.642 91 247.367 91H263.867C274.592 91 280.367 85.225 280.367 74.5V16.75C280.367 6.025 274.592 0.25 263.867 0.25H247.367C236.642 0.25 230.867 6.025 230.867 16.75V74.5ZM259.742 16.585C262.382 16.585 263.867 18.07 263.867 20.71V70.375C263.867 73.015 262.382 74.5 259.742 74.5H251.492C248.852 74.5 247.367 73.015 247.367 70.375V20.71C247.367 18.07 248.852 16.585 251.492 16.585H259.742Z"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </Container>
  );
};

// Hello.propTypes = {
//   width: PropTypes.number,
//   // height: PropTypes.number,
// };
//
// Hello.defaultProps = {
//   width: 180,
//   // height: 86,
// };

export default Hello;
