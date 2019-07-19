import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: sidebar;

  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: 0;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  height: 100%;
  background: #333;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    box-shadow: 0 12px 20px -10px rgba(0, 172, 193, 0.28),
      0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2);
    background-color: #00acc1;

    width: 200px;
    height: 30px;
    margin: 10px 15px 0;

    padding: 10px 15px;
    position: relative;
    transition: all 300ms linear;

    cursor: pointer;

    svg {
      margin-right: 10px;
    }
  }
`;
