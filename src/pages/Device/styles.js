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
`;
