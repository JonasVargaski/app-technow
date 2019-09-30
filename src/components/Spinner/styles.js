import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  overflow: hidden;

  ${({ background }) =>
    background &&
    css`
      backdrop-filter: grayscale(0.8) blur(2px);
      background: ${background};
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 9;
    `};

  > span {
    display: block;
    font-size: 1rem;
    color: ${props => darken(0.2, props.color)};
    background: ${props => lighten(0.45, props.color)};
    user-select: none;
    margin-top: 4px;
    border-radius: 15px;
    padding: 5px 7px;
  }
`;

export const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}

  & .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
