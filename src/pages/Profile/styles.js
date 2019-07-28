import styled from 'styled-components';

import { CardContainer } from '~/components/DefaultStyle';

export const Container = styled.div`
  /* display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  /* grid-auto-rows: minmax(200px, auto); */
`;

export const Card = styled(CardContainer)`
  padding: 15px;
  form {
    input {
      margin-bottom: 14px;
    }

    button {
      margin-top: 21px;
    }

    > h3 {
      font-size: 1.125rem;
      font-weight: 400;
      margin: 1.5rem;
    }
  }
`;
