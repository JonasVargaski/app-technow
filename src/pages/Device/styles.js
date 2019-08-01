import styled from 'styled-components';
import { CardContainer } from '~/components/DefaultStyle/index';

export const Container = styled(CardContainer)`
  padding: 12px;

  > h3 {
    margin-bottom: 30px;
    font-size: 1.125rem;
    font-weight: 400;
  }

  button {
    margin-top: 16px;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ddd;
    margin: 1em 0;
    padding: 0;
  }
`;

export const ListControler = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 10px 12px;
  }
  tbody td {
    padding: 8px 12px;
    border-bottom: 1px solid #eee;
  }
`;
