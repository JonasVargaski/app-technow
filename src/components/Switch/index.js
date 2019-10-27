import React from 'react';
import PropTypes from 'prop-types';

import { StyledSwitch } from './styles';

export default function Switch({ value, onChange, ...rest }) {
  function handleValue(event) {
    onChange(event.target.checked);
  }
  return (
    <StyledSwitch defaultChecked={value} onChange={handleValue} {...rest} />
  );
}

Switch.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  value: false,
};
