import styled from 'styled-components';
import { darken } from 'polished';

import { device } from '~/styles/breakpoints';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(41, 51, 56, 1) 0%,
    rgba(188, 186, 204, 0.2665441176470589) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 820px;
  margin: 0 20px;
  height: 608px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 3px 5px 16px rgba(0, 15, 0, 9);
  background: #fefefe;
  position: relative;

  img {
    @media ${device.tablet} {
      display: none;
    }

    max-width: 280px;
    max-height: 280px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 26px;
    position: absolute;
    line-height: 26px;
    top: 22px;

    span {
      display: block;
      font-weight: 500;
      font-size: 20px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #e6e6e6;
      width: 320px;
      max-width: 320px;
      border: 0;
      border-radius: 4px;
      height: 52px;
      padding: 0 15px;
      color: #666666;
      margin: 0 0 10px;
      font-size: 15px;

      &::placeholder {
        color: #666666;
      }

      &:focus {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6);
        transition: 0.3s;
      }
    }

    span {
      color: red;
      align-self: flex-start;
      margin: -5px 0 10px;
      font-weight: bold;
    }

    button {
      margin: 22px 0 0;
      height: 44px;
      background: #3bdd41;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      > img {
        height: 100%;
        margin-left: -15px;
      }

      &:hover {
        background: ${darken(0.08, '#3bdd41')};
      }
    }

    a {
      color: #1cbcf7;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 18px;
  left: 22px;
  color: #777777;
  font-size: 14px;

  a {
    font-size: 15px;
    color: #68cff5;
    cursor: pointer;
    margin-left: 5px;
  }
`;
