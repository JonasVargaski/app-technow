import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #ebebeb;
  display: grid;
  grid-template-areas: 'header header' 'sidebar content';
  grid-template-columns: 260px 1fr;
  grid-template-rows: 65px 1fr;
  height: 100%;
  overflow: auto;
`;

export const Main = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;

  div {
    height: 1300px;
    width: 150px;
    background: red;
  }
`;
