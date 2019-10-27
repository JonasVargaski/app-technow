import styled from 'styled-components';
import { darken } from 'polished';

import { sizes } from '~/styles/breakpoints';

export const Wrapper = styled.div`
  min-height: 100%;
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
  margin: 10px 16px;
  min-height: 558px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 3px 5px 16px rgba(0, 15, 0, 9);
  background: #fefefe;
  position: relative;

  img {
    @media ${sizes.phone} {
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
  width: 100%;
  max-width: 400px;
  padding: 19px;

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
    width: 100%;

    input {
      height: 50px;
      margin: 0 0 10px;
      font-size: 15px;
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
