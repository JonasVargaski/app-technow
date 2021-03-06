import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';
import { sizes } from '~/styles/breakpoints';
import { CardContainer } from '~/components/DefaultStyle';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  &:hover::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.07);
  }

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled(CardContainer)`
  position: absolute;
  width: 455px;
  top: 35px;
  right: -68px;
  will-change: transform;
  padding: 15px 0;
  z-index: 100;
  transition: opacity 0.6s linear;
  ${props =>
    props.visible
      ? css`
          opacity: 1;
          display: block;
        `
      : css`
          opacity: 0;
          display: none;
        `}

  &::before {
    content: '';
    position: absolute;
    right: 70px;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    top: -8px;
    border-bottom: 8px solid rgba(0, 40, 100, 0.12);

    @media ${sizes.phone} {
      display: none;
    }
  }

  @media ${sizes.phone} {
    position: fixed;
    top: 48px;
    left: 5px;
    width: 97%;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 270px;
`;

export const Notification = styled.div`
  padding: 3px 12px;
  color: #16181b;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  & + div {
    margin-top: 11px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
  }

  button {
    font-size: 12px;
    border: 0;
    padding: 2px 5px;
    background: ${lighten(0.2, '#7159c1')};
    border-radius: 5px;
    color: #fff;
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 8px;
      }
    `}
`;
