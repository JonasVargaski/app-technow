import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Wrapper = styled.div`
  grid-area: sidebar;
  background: #fefefe;
  user-select: none;
  border-right: 1px solid #eaefef;
  overflow-x: hidden;
  max-width: 230px;
  transition: width 0.4s;
  width: ${props => (props.toogle ? '230px' : '50px')};
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: calc(100vh - 90px);
`;

export const Header = styled.div`
  height: 60px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;

  > img {
    height: 50px;
    width: 70px;
  }

  > svg {
    color: #95a6b1;
    cursor: pointer;
    padding: 3px;

    &:hover {
      color: #7560ec;
    }
  }
`;

export const List = styled.ul`
  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0px 15px;
    color: #95a6b1;
    position: relative;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #7560ec;
      background: #f0eefc;
    }

    &:hover::before {
      content: '';
      height: 100%;
      position: absolute;
      left: 0;
      border-left: 4px solid #7560ec;
    }

    > svg {
      margin-right: 14px;
      display: block;
    }
  }
`;
