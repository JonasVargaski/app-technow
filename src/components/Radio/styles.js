import styled from 'styled-components';

export const Container = styled.div``;

export const Radio = styled.label`
  position: relative;
  font-size: 14px !important;
  padding: 5px 2px 0;
  font-weight: 400 !important;
  color: #2d2f31;
  width: max-content;
  display: flex;
  align-items: center;
  user-select: none;
  transition: all 0.2s;
  opacity: ${({ disabled }) => disabled && 0.4}};
  ${({ disabled }) => (disabled ? 'cursor:not-allowed' : 'cursor:pointer')};

  &:hover {
    transform: scale(1.1);
  }

  span {
    position: relative;
    display: block;
    float: left;
    margin: 0 5px 0 0;
    width: 18px;
    height: 18px;
    border: 2px solid #aaa;
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 2.7px;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: #a18eef;
      transform: scale(0);
      transition: all 0.2s ease;
      opacity: 0.08;
      pointer-events: none;
    }
  }

  input {
    display: none;
  }

  input[type='radio']:checked + span {
    border-color: #7560ec;

    &:after {
      transform: scale(1);
      transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
      opacity: 1;
    }
  }
`;
