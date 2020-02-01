import styled from 'styled-components';
import { CardContainer, Form } from '~/components/DefaultStyle';

export const Container = styled(CardContainer)`
  padding: 12px;
  margin: 0 auto;

  > h3 {
    font-size: 1.125rem;
    font-weight: 400;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const FormDevice = styled(Form)`
  display: flex;
  flex-direction: column;
  > span {
    margin-top: 4px;
  }

  h4 {
    color: #444;
    padding-bottom: 15px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      color: #ef5350;
      font-size: 14px;
      font-weight: bold;
      margin-left: 13px;
    }

    strong {
      color: #555;
      margin: 8px 10px;
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    > button {
      margin-left: 10px;
      svg {
        margin-right: 4px;
      }
    }
  }
`;

export const ListDevices = styled.ul`
  width: 100%;
  margin-top: 15px;

  li {
    padding: 4px 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;

    div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }

    strong {
      color: #444;
    }

    span {
      color: #666;
    }

    button {
      background: #7560ec;
      border: none;
      color: #fff;
      border-radius: 4px;
      padding: 1px 4px;
      font-size: 12px;
    }
  }
`;
