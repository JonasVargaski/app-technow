import React from 'react';
import * as Yup from 'yup';

import { MdDelete } from 'react-icons/md';
import { Form, Input, Button } from '~/components/DefaultStyle';
import { Col, Row } from '~/components/Grid';

import { Container, TableController, DeviceStatus } from './styles';

const schema = Yup.object().shape({
  serial: Yup.string()
    .min(12, 'Número serial necessita no minimo 12 caracteres')
    .required('O numero serial é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  description: Yup.string().min(3, 'A descrição é obrigatória'),
});

export default function Devices() {
  return (
    <Container>
      <h3>Controladores</h3>
      <Form initialData={{}} schema={schema} onSubmit={() => {}}>
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
          <Button type="submit">Salvar</Button>
        </Row>
      </Form>
      <hr />
      <TableController>
        <thead>
          <tr>
            <th>Serial</th>
            <th>Descrição</th>
            <th>Último conexão</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sa15151\0s15151z5</td>
            <td>Estufa teste teste 01</td>
            <td>22/10/2019 08:55</td>
            <td>
              <DeviceStatus connected>
                <div /> <span>Conectado</span>
              </DeviceStatus>
            </td>
            <td>
              <Button background="#EF5350">
                <MdDelete size={18} /> Excluir
              </Button>
            </td>
          </tr>
          <tr>
            <td>sa15151\0s15151z5</td>
            <td>Estufa 01</td>
            <td>22/10/2019 08:55</td>
            <td>
              <DeviceStatus>
                <div /> <span>Desconectado</span>
              </DeviceStatus>
            </td>
            <td>
              <Button background="#EF5350">
                <MdDelete size={18} /> Excluir
              </Button>
            </td>
          </tr>
        </tbody>
      </TableController>
    </Container>
  );
}
