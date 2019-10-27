import React from 'react';
import PropTypes from 'prop-types';

import { Container, StyledSpinner } from './styles';

export default function Spinner({ show, label, color, size, background }) {
  if (show) {
    return (
      <Container background={background} color={color}>
        <StyledSpinner viewBox="0 0 50 50" color={color} size={size}>
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="3.6"
          />
        </StyledSpinner>
        {label && <span>{label}</span>}
      </Container>
    );
  }
  return null;
}

Spinner.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  background: PropTypes.string,
};

Spinner.defaultProps = {
  label: null,
  size: 45,
  color: '#5652bf',
  background: null,
};
