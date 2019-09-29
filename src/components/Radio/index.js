import React from 'react';
import PropTypes from 'prop-types';

import { Container, Radio } from './styles';

export default function RadioGroup({
  options,
  name,
  value,
  defaultValue,
  onChange,
  ...rest
}) {
  function handleRadioValue(selectedValue) {
    onChange(selectedValue.value);
  }
  return (
    <Container>
      {options.map(option => (
        <Radio key={option.value}>
          <input
            type="radio"
            onChange={() => handleRadioValue(option)}
            checked={
              value ? option.value === value : defaultValue === option.value
            }
            name={name}
            {...rest}
          />
          <span />
          {option.label}
        </Radio>
      ))}
      <span />
    </Container>
  );
}

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

RadioGroup.defaultProps = {
  value: null,
  defaultValue: '',
};
