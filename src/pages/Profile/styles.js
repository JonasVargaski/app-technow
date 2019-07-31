import styled from 'styled-components';

import { CardContainer } from '~/components/DefaultStyle';

export const Container = styled(CardContainer)`
  padding: 12px;
  max-width: 526px;
  margin: 0 auto;

  > h3 {
    font-size: 1.125rem;
    font-weight: 400;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 14px;
    }
    > div {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;

      button {
        max-width: 220px;
      }
    }
  }
`;
