import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  Container,
  Select,
  Arrow,
  ItemSelected,
  Box,
  BoxOptions,
  Option,
} from './styles';

export default function DefaultSelect({
  disabled,
  label,
  value,
  defaultValue,
  placeholder,
  options,
  attribute,
  onChange,
}) {
  const [openSelect, setOpenSelect] = useState(false);

  useEffect(() => {
    if (defaultValue && !value) {
      const option = options.find(opt => opt.id === defaultValue.id);

      if (option) {
        onChange(option);
      }
    }
  }, [defaultValue, value, onChange, options]);

  function hanldeSelectOption(option) {
    setOpenSelect(false);
    onChange(option);
  }

  function hadleCloseBox() {
    setTimeout(() => {
      setOpenSelect(false);
    }, 250);
  }

  return (
    <Container onBlur={hadleCloseBox}>
      {label && <b>{label}</b>}
      <Select
        onClick={() => !disabled && setOpenSelect(!openSelect)}
        disabled={disabled}
      >
        <ItemSelected>{value ? value[attribute] : placeholder}</ItemSelected>
        <Arrow>
          <span />
          <MdKeyboardArrowDown size={26} color="#bbb" />
        </Arrow>
      </Select>
      {openSelect && (
        <Box>
          <BoxOptions>
            {options.map(op => (
              <Option onClick={() => hanldeSelectOption(op)} key={op.id}>
                {op[attribute]}
              </Option>
            ))}
          </BoxOptions>
        </Box>
      )}
    </Container>
  );
}

DefaultSelect.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  attribute: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

DefaultSelect.defaultProps = {
  label: null,
  value: null,
  defaultValue: {
    id: 0,
    title: '',
  },
  placeholder: '',
  disabled: false,
  attribute: 'title',
  onChange: null,
};
