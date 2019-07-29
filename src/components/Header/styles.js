import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  grid-area: header;
  border-bottom: 1px solid #e2e4ed;
`;

export const Content = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      max-height: 75px;
      max-width: 80px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    a {
      display: block;
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }

    button {
      background: none;
      border: none;
      font-size: 12px;
      font-weight: bold;
      color: #999;
    }
  }

  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    border: 2px solid #bbb;
  }
`;
