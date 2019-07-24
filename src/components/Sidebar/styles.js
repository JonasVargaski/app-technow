import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  grid-area: sidebar;
  background: #fefefe;
  user-select: none;
  border-right: 1px solid #eaefef;
  max-width: 230px;
  transition: width 0.4s;
  width: ${props => (props.toogle ? '235px' : '55px')};

  > div {
    height: 60px;
    margin-bottom: 20px;
    position: relative;

    > svg {
      color: #95a6b1;
      cursor: pointer;
      padding: 3px;
      position: absolute;
      left: 10px;
      top: 15px;

      &:hover {
        color: #7560ec;
      }
    }
  }
`;

export const Nav = styled.nav`
  overflow: hidden;

  > a {
    display: flex;
    align-items: center;
    width: 230px;
    height: 46px;
    padding: 0px 15px;
    color: #95a6b1;
    position: relative;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #7560ec;
    }

    > svg {
      margin-right: 17px;
    }
  }
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  &.${'active'} {
    color: #7560ec;
    background: #f0eefc;

    ::before {
      content: '';
      height: 100%;
      position: absolute;
      left: 0;
      border-left: 4px solid #7560ec;
    }
  }
`;
