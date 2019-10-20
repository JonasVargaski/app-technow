import styled from 'styled-components';
import { sizes } from '~/styles/breakpoints';

function getWidthGrid(value) {
  if (!value) return null;

  const width = (value / 12) * 100;
  return `width: ${width}%;`;
}

export const Col = styled.div`
  @media ${sizes.phone} {
    ${({ xs }) => xs && getWidthGrid(xs)}
  }

  @media ${sizes.tablet} {
    ${({ sm }) => sm && getWidthGrid(sm)}
  }

  @media ${sizes.laptop} {
    ${({ md }) => md && getWidthGrid(md)}
  }

  @media ${sizes.desktop} {
    ${({ lg }) => lg && getWidthGrid(lg)}
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;

  justify-content: ${({ justify }) => justify && justify}};

  > div {
    padding: 0 4px;
  }
`;
