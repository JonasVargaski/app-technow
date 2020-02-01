import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';

import Modal from '~/components/Modal';
import Spinner from '~/components/Spinner';
import { Button } from '~/components/DefaultStyle';
import FormDevice from './FormDevice';
import { Container, ListDevices } from './styles';

export default function RegisterDevice() {
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);

  function setListDevices(newDevices) {
    setDevices(
      newDevices.map(item => ({
        ...item,
        status: item.situation === 'active' ? 'Ativo' : 'Inativo',
        dateFormatted: format(new Date(item.updatedAt), 'MM/dd/yyyy'),
      }))
    );
  }

  useEffect(() => {
    async function loadDevices() {
      setLoading(true);
      const response = await api.get('devices');
      setListDevices(response.data);
      setLoading(false);
    }

    loadDevices();
  }, []);

  async function handleSubmit(data) {
    setLoading(true);
    if (data.id) {
      const response = await api.put(`devices/${data.id}`, data);
      if (response.data.situation === 'blocked') {
        setListDevices([...devices.filter(d => d.id !== data.id)]);
      } else {
        setListDevices([
          response.data,
          ...devices.filter(d => d.id !== data.id),
        ]);
      }
    } else {
      const response = await api.post(`devices`, data);
      setListDevices([response.data, ...devices]);
    }
    setLoading(false);
    setDevice(null);
  }

  return (
    <Container>
      <h3>Cadastro de Controladores</h3>
      <Spinner
        show={loading}
        label="Carregando..."
        size={68}
        background="rgba(255,255,255,0.2)"
      />

      <div>
        <Button onClick={() => setDevice({})}>
          <MdAdd size={25} color="#fff" /> Adicionar
        </Button>
      </div>

      <Modal show={device} width="600px">
        <Modal.Body>
          <FormDevice
            device={device}
            handleSubmit={handleSubmit}
            handleCancel={() => setDevice(null)}
            loading={loading}
          />
        </Modal.Body>
      </Modal>

      <ListDevices>
        {devices.map(item => (
          <li key={item.id}>
            <div>
              <strong>{item.description}</strong>
              <span>{item.serial}</span>
              <span>{item.password}</span>
            </div>

            <div>
              <span>{item.status}</span>
              <span>{item.dateFormatted}</span>
              <button type="button" onClick={() => setDevice(item)}>
                Editar
              </button>
            </div>
          </li>
        ))}
      </ListDevices>
    </Container>
  );
}
