import React, { useState } from 'react';
import { MdHelp } from 'react-icons/md';

import Modal from '../Modal';

import { Container, ConfirmButton, CancelButton } from './styles';

export default function Confirm() {
  const [show, setShow] = useState(true);
  return (
    <Modal show={show} width="400px">
      <Container>
        <header>
          <MdHelp size={34} />
          <h1>Confirmação</h1>
        </header>
        <span>
          lorem samkmsdksamksamksad km kmsak mksad m kansad sda hsadbagsdgmv
          kfdj gfnj gnjgsdnj
        </span>
        <div>
          <CancelButton onClick={() => setShow(false)}>Cancelar</CancelButton>
          <ConfirmButton>Confirmar</ConfirmButton>
        </div>
      </Container>
    </Modal>
  );
}
