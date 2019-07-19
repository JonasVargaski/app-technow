import React from 'react';
import { Md3DRotation } from 'react-icons/md';

import { List } from './styles';

export default function Sidebar() {
  return (
    <List>
      <li>
        <Md3DRotation size={20} color="#fff" />
        Item 01
      </li>
      <li>
        <Md3DRotation size={20} color="#fff" />
        Item 02
      </li>
      <li>
        <Md3DRotation size={20} color="#fff" />
        Item 03
      </li>
      <li>
        <Md3DRotation size={20} color="#fff" />
        Item 04
      </li>
      <li>
        <Md3DRotation size={20} color="#fff" />
        Item 05
      </li>
      <li>
        <Md3DRotation size={20} color="#fff" />
        Item 06
      </li>
    </List>
  );
}
