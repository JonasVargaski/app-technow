import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 50px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img,
    div {
      width: 142px;
      height: 142px;
      border-radius: 50%;
      border: 2px solid #bbb;
      background: #fafafa;
    }
    > div {
      border: 2px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      display: none;
    }
  }
`;
