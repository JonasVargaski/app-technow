import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { sizes } from '~/styles/breakpoints';

export const Wrapper = styled.div`
  background: #f5f7fb;
  display: grid;
  grid-template-areas: 'sidebar header' 'sidebar content';
  grid-template-columns: auto 1fr;
  grid-template-rows: 55px 1fr;
  height: 100%;
  overflow: auto;
`;

export const Scroll = styled(PerfectScrollbar)`
  grid-area: content;
  padding: 16px 16px 15px 12px;

  @media ${sizes.phone} {
    margin-left: 50px;
  }
`;
