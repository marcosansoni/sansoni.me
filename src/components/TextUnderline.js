import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../assets/theme/Color';

const Container = styled.span`
  position: relative;
  font-size: 32px;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 16px;
    background: ${Color.DARK_ORANGE};
    bottom: 8px;
    transition: all 0.2s ease-out;
  }

  :hover::before {
    transform: translateY(11px);
  }

  :hover {
    p {
      background-position: 0 8px;
    }
  }
`;

const Text = styled.p`
  cursor: pointer;
  position: relative;
  display: inline-block;
  background: ${`linear-gradient(to bottom, ${Color.BLACK}, ${Color.BLACK} 60%, ${Color.WHITE} 60%, ${Color.WHITE} 100%)`};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-repeat: no-repeat;
  transition: background 0.2s ease-out;
  white-space: nowrap;
  margin: 0;
`;

const Content = styled.div`
  display: inline-flex;
  height: 48px;
`;

const TextUnderline = (props) => {
  const { children, style, className } = props;
  return (
    <Content style={style} className={className}>
      <Container>
        <Text>
          {children}
        </Text>
      </Container>
    </Content>
  );
};

TextUnderline.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

TextUnderline.defaultProps = {
  children: 'Marco',
  style: undefined,
  className: undefined,
};

export default TextUnderline;
