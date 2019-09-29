import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
  > b {
    margin: 0 0 2px 3px;
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.04em;
  }
`;

export const Select = styled.div.attrs({
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

  ${({ disabled }) =>
    disabled &&
    css`
      background: #f8f9fa;
      cursor: not-allowed;
      pointer-events: all !important;
      box-shadow: none !important;
    `}

  &:focus {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6);
    transition: box-shadow 0.15s ease-in-out;
  }
`;

export const ItemSelected = styled.div`
  max-width: calc(100% - 32px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;

  span {
    align-self: stretch;
    background-color: rgb(204, 204, 204);
    margin: 2px 3px;
    width: 1px;
  }
`;

export const Box = styled.div`
  margin-top: 3px;
  position: absolute;
  border-radius: 4px;
  border: 1px solid #e2eded;
  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
  background-color: #fff;
  top: 100%;
  left: 0;
  width: 100%;
  min-height: 60px;
  width: 100%;
  z-index: 20;
`;

export const BoxOptions = styled(PerfectScrollbar).attrs({
  suppressScrollX: true,
})`
  max-height: 260px;
  width: 100%;
`;

export const Option = styled.div`
  border-top: 1px solid #fafafa;
  padding: 0.78rem 1.14rem !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  transition: background 0.45s;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
