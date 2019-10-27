import styled from 'styled-components';
import { CardContainer } from '~/components/DefaultStyle';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(368px, 1fr));
  grid-auto-rows: minmax(148px, auto);
  grid-gap: 20px;
  position: relative;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const Card = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 12px;
  overflow: hidden;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #c9c9c9;
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      > h4 {
        font-size: 1.225rem;
        font-weight: 400;
      }
      > span {
        font-size: 1.915rem;
      }
    }
  }
  > span {
    color: #a9a9a9;
    font-size: 14px;
    margin: 7px 0;
  }
`;

export const SelectDeviceCard = styled(CardContainer)`
  width: 100%;
  position: relative;
  padding: 10px;
  top: -13px;
  margin-bottom: 20px;
`;
