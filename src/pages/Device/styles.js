import styled from 'styled-components';
import { CardContainer } from '~/components/DefaultStyle/index';

export const Container = styled(CardContainer)`
  padding: 12px;

  > h3 {
    margin-bottom: 30px;
    font-size: 1.125rem;
    font-weight: 400;
  }

  form {
    button {
      margin-top: 16px;
    }
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

export const TableController = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 10px 12px;
  }

  tbody td {
    padding: 8px 12px;
    border-bottom: 1px solid #eee;

    button {
      height: 26px;
      font-size: 13px;
      padding: 0px 3px;
    }
  }
`;

export const DeviceStatus = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 1px solid #bbb;
    margin-right: 6px;
    background: ${({ connected }) => (connected ? '#64e810' : '#BDBDBD')};
  }
`;
