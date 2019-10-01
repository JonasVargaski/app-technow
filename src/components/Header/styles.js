import styled from 'styled-components';
import { CardContainer } from '~/components/DefaultStyle';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  grid-area: header;
  border-bottom: 1px solid #e2e4ed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Profile = styled.div`
  position: relative;
  display: flex;
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid #eee;

  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    border: 2px solid #bbb;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 8px;
  min-width: 160px;
  cursor: pointer;

  > b {
    white-space: nowrap;
    overflow: hidden;
    max-width: 230px;
    text-overflow: ellipsis;
  }
  > span {
    display: block;
    position: relative;
    top: -4px;
  }
`;

export const Options = styled(CardContainer)`
  width: 192px;
  position: absolute;
  top: 41px;
  left: -12px;
  z-index: 7;

  > button {
    background: none;
    outline: none;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 7px 11px;
    width: 100%;
    color: #6e7687;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }

    > svg {
      margin-right: 11px;
    }
  }
`;
