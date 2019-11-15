import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid #cbcbcb;
  border-radius: 6px;
  padding: 17px 10px;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: #0062b0;
    h3 {
      margin-left: 12px;
      font-size: 18px;
    }
  }

  p {
    margin: 19px 0;

    b {
      color: #444;
    }
  }

  span {
    display: block;
    margin-top: 40px;
    font-size: 12px;

    button {
      font-size: 13px;
      text-decoration: underline;
      color: #0068f0;
      outline: none;
      background: none;
      border: none;
      margin: 0 4px;
    }
  }

  a {
    position: absolute;
    bottom: -35px;
    left: 0;
    color: #1cbcf7;
    margin-top: 15px;
    font-size: 15px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
