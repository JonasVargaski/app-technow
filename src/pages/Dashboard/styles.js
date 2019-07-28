import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;

  div {
    background: #fff;
    border-radius: 4px;
    padding: 5px;
    box-shadow: 0 1px 2px rgba(58, 58, 58, 0.05),
      0 0 0 1px hsla(240, 3%, 75%, 0.1);
    border: 1px solid #eee;
  }

  .a2 {
    height: 200px;
    background: lightcoral;

    + div {
      background: red;
    }
  }
`;
