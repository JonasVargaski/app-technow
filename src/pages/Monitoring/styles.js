import styled from 'styled-components';
import { CardContainer } from '~/components/DefaultStyle';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(368px, 1fr));
  grid-auto-rows: minmax(148px, auto);
  grid-gap: 18px;
  position: relative;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const Card = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 10px;
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
      white-space: nowrap;
      > h4 {
        font-size: 1.15rem;
        font-weight: 400;
        white-space: nowrap;
      }
      > span {
        font-size: 1.915rem;
        white-space: nowrap;
        padding-left: 11px;
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
  padding: 9px;
  margin-bottom: 12px;
`;
