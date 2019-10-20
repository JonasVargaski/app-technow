import React, { useState, useEffect, useRef } from 'react';
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  function toogleDropDown(e) {
    if (dropdownRef && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', toogleDropDown, false);
    document.addEventListener('touchend', toogleDropDown, false);
    return () => {
      document.removeEventListener('mouseup', toogleDropDown, false);
      document.removeEventListener('touchend', toogleDropDown, false);
    };
  }, []);

  useEffect(() => {
    if (defaultValue && !value) {
      const option = options.find(opt => opt.id === defaultValue.id);

      if (option) {
        onChange(option);
      }
    }
  }, [defaultValue, value, onChange, options]);

  function hanldeSelectOption(option) {
    setDropdownOpen(false);
    onChange(option);
  }

  return (
    <Container ref={dropdownRef}>
      {label && <b>{label}</b>}
      <Select
        onClick={() => !disabled && setDropdownOpen(!dropdownOpen)}
        disabled={disabled}
      >
        <ItemSelected>{value ? value[attribute] : placeholder}</ItemSelected>
        <Arrow>
          <span />
          <MdKeyboardArrowDown size={26} color="#bbb" />
        </Arrow>
      </Select>
      {dropdownOpen && (
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
