import styled from 'styled-components';
import { CardContainer } from '~/components/DefaultStyle/index';

import { sizes } from '~/styles/breakpoints';

export const Container = styled(CardContainer)`
  padding: 12px;
  max-width: 1652px;
  margin: 0 auto;

  > h3 {
    margin-bottom: 30px;
    font-size: 1.125rem;
    font-weight: 400;
  }

  form {
    button {
      margin-top: 16px;
      svg {
        margin-right: 5px;
      }
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

export const TableContainer = styled(CardContainer)`
  overflow-x: auto;
`;

export const TableController = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr:nth-child(even) {
    background-color: #fafafa;
  }

  thead {
    background: #fcfcfc;
    border-bottom: 1px solid #efefef;
  }

  thead th {
    text-align: left;
    padding: 8px 9px;
    color: #9aa0ac;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 400;
  }

  tbody td {
    padding: 8px 9px;
    border-bottom: 1px solid #eee;

    &:nth-child(1) {
      width: 30%;
    }
    &:nth-child(2) {
      width: 70%;
    }

    > div {
      display: flex;
      align-items: center;

      button {
        font-size: 13px;
        height: 28px;
        > svg {
          margin-right: 2px;
        }
      }

      @media ${sizes.phone} {
        button {
          width: 20px;
          height: 25px;
          span {
            display: none;
          }
        }
      }

      > button + button {
        margin-left: 5px;
      }
    }
  }
`;
