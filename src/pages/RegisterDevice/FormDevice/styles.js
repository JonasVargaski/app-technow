import styled from 'styled-components';
import { Form } from '~/components/DefaultStyle';

export const Container = styled.div`
  position: relative;
`;

export const StyledForm = styled(Form)`
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
