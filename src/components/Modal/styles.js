import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  position: relative;
  background: #fff;
  margin: 10px;
  ${({ width }) =>
    width &&
    css`
      max-width: ${width};
      width: 100%;
    `}
  border-radius: 5px;
  border: 1px solid #bbb;
  box-shadow: 0px 0px 20px -7px rgba(0, 0, 0, 0.64);
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      transform: translate3d(0, -45%, 0);
      opacity: -0.3;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const Header = styled.header`
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  background: #f9fafb;
  border-bottom: 1px solid #bbb;
  user-select: none;
`;

export const Body = styled.main`
  padding: 10px;
`;

export const Footer = styled.footer`
  padding: 0.8rem 1rem;
  background: #f9fafb;
  border-top: 1px solid #bbb;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    margin-left: 11px;
  }
`;
