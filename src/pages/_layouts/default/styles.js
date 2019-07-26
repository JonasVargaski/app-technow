import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
  padding: 8px;
`;

export const Scroll = styled(PerfectScrollbar)`
  min-width: 100%;
  min-height: 100%;
`;
