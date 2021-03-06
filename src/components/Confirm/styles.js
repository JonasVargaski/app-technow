import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;

  header {
    display: flex;
    align-items: center;
    color: #555;

    svg {
      margin: 0 11px 11px 0px;
    }

    h1 {
      margin-bottom: 8px;
      font-size: 1.45rem;
    }
  }

  span {
    font-size: 15px;
    color: #808080;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    user-select: none;
    margin-top: 33px;

    > button {
      margin: 0 6px;
      min-width: 47px;
      font-size: 1rem;
      padding: 3px 8px;
      border-radius: 4px;
    }
  }
`;
