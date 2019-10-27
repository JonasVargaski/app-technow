import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { MdDelete, MdSave } from 'react-icons/md';

import confirm from '~/components/Confirm';

import {
  saveDeviceRequest,
  removeDeviceRequest,
} from '~/store/modules/device/actions';

import { Form, Input, Button } from '~/components/DefaultStyle';
import { Col, Row } from '~/components/Grid';

import { Container, TableController, TableContainer } from './styles';

const schema = Yup.object().shape({
  serial: Yup.string()
    .min(10, 'Número serial inválido')
    .required('O numero serial é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  description: Yup.string().min(3, 'A descrição é obrigatória'),
});

export default function Devices() {
  const dispatch = useDispatch();
  const devices = useSelector(state => state.device.devices);

  function handleAddDevice(data, { resetForm }) {
    dispatch(saveDeviceRequest(data, resetForm));
  }

  function handleRemoveDevice({ id, description }) {
    confirm({
      confirmColor: '#EF5350',
      content: `Tem certeza que deseja excluir o controlador "${description}"?
         Não será possível reverter as alterações.`,
    }).then(e => {
      if (e) dispatch(removeDeviceRequest(id));
    });
  }

  return (
    <Container>
      <h3>Controladores</h3>
      <Form schema={schema} onSubmit={handleAddDevice}>
        <Row>
          <Col xs="12" sm="3">
            <Input type="text" name="serial" label="Serial" />
          </Col>
          <Col xs="12" sm="3">
            <Input type="text" name="password" label="Senha" />
          </Col>
          <Col xs="12" sm="6">
            <Input type="text" name="description" label="Descrição" />
          </Col>
        </Row>
        <Row justify="flex-end">
          <Button type="submit">
            <MdSave size={23} />
            Salvar
          </Button>
        </Row>
      </Form>
      <hr />

      <TableContainer>
        <TableController>
          <thead>
            <tr>
              <th>Serial</th>
              <th>Descrição</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {devices.map(device => (
              <tr key={device.id}>
                <td>{device.serial}</td>
                <td>{device.description}</td>
                <td>
                  <div>
                    <Button
                      title="Excluir"
                      background="#EF5350"
                      onClick={() => handleRemoveDevice(device)}
                    >
                      <MdDelete size={17} />
                      <span>Excluir</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </TableController>
      </TableContainer>
    </Container>
  );
}
