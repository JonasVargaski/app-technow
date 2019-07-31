import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 50px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 2px solid #bbb;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
