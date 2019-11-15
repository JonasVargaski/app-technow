import styled from 'styled-components';
import { CardContainer } from '~/components/DefaultStyle';
import { sizes } from '~/styles/breakpoints';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  grid-area: header;
  border-bottom: 1px solid #e2e4ed;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${sizes.phone} {
    padding: 8px;
  }
`;

export const Profile = styled.div`
  position: relative;
  display: flex;
  margin-left: 10px;
  padding: 0 5px 0 10px;
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
  min-width: 100px;
  cursor: pointer;

  > b {
    white-space: nowrap;
    overflow: hidden;
    max-width: 320px;
    text-overflow: ellipsis;

    @media ${sizes.phone} {
      max-width: 185px;
    }
  }
  > span {
    display: block;
    position: relative;
    top: -4px;
  }
`;

export const Options = styled(CardContainer)`
  width: 100%;
  max-width: 200px;
  position: absolute;
  top: 41px;
  right: 5px;
  z-index: 7;

  > hr {
    border-top: 1px solid #fafafa;
    margin: 3px 0 0;
  }

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
