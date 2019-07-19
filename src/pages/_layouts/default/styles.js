import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f4f8f9;
  display: grid;
  grid-template-areas: 'sidebar header' 'sidebar content';
  grid-template-columns: auto 1fr;
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
    width: 640px;
    border-radius: 4px;
    padding: 4px;
    background: #ffffff;
  }
`;
