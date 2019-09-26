import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const Container = styled.div.attrs({
  tabIndex: '-1',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 42px;
  padding: 5px 3px 6px 12px;
  color: #495057;
  width: 100%;
  border: 1px solid rgba(0, 40, 100, 0.12);
  border-radius: 4px;
  user-select: none;
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6);
    transition: box-shadow 0.15s ease-in-out;
  }

  animation-name: zoomIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
`;

export const Selected = styled.div`
  max-width: calc(100% - 32px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Arrow = styled(MdKeyboardArrowDown).attrs({
  size: 26,
  color: '#bbb',
})`
  border-left: 1px solid #ccc;
`;
