import React, { useState, useEffect } from 'react';

import { MdHelp } from 'react-icons/md';
import Modal from '../Modal';

import events from '~/util/events_old';

import { Container } from './styles';
import { Button } from '~/components/DefaultStyle';

export function ConfirmContainer() {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    events.once('confirm-dialog', props => {
      setData(props);
      setShow(true);
    });

    return () => {
      events.$off('confirm-dialog');
    };
  }, []);

  function handleConfirm() {
    setShow(false);
    data.resolve(true);
  }
  function handleCancel() {
    setShow(false);
    data.resolve(false);
  }

  return (
    <Modal show={show} width="480px">
      <Container>
        <header>
          <MdHelp size={34} />
          <h1>{data.title}</h1>
        </header>
        <span>{data.content}</span>
        <div>
          {data.showCancel && (
            <Button background={data.cancelColor} onClick={handleCancel}>
              {data.cancelText}
            </Button>
          )}
          {data.showConfirm && (
            <Button background={data.confirmColor} onClick={handleConfirm}>
              {data.confirmText}
            </Button>
          )}
        </div>
      </Container>
    </Modal>
  );
}
