import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Container, Arrow, ItemSelected } from './styles';

export default function Select() {
  return (
    <Container disable>
      <ItemSelected>
        Selecione... saksdnnsadjsadjsadjsadjsadjdjdjsjsadjsad
      </ItemSelected>
      <Arrow>
        <span />
        <MdKeyboardArrowDown size={26} color="#bbb" />
      </Arrow>
    </Container>
  );
}
