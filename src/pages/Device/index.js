import React from 'react';
import * as Yup from 'yup';

import { Form, Input, Button } from '~/components/DefaultStyle';
import { Col, Row } from '~/components/Grid';

import { Container, ListControler } from './styles';

const schema = Yup.object().shape({
  serial: Yup.string()
    .min(12, 'Número de série inválido, minimo 12 caracteres')
    .required('O numero de série é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  description: Yup.string().required('A descrição é obrigatória'),
});

export default function Devices() {
  return (
    <Container>
      <h3>Controladores</h3>
      <Form initialData={{}} schema={schema} onSubmit={() => {}}>
        <Row>
          <Col xs="12" sm="3">
            <Input name="serial" label="Numero de série" />
          </Col>
          <Col xs="12" sm="3">
            <Input type="password" name="password" label="Senha" />
          </Col>
          <Col xs="12" sm="6">
            <Input name="description" label="Descrição" />
          </Col>
        </Row>
        <Row justify="flex-end">
          <Button type="submit">Salvar</Button>
        </Row>
      </Form>
      <hr />
      <ListControler>
        <thead>
          <tr>
            <th>Número de Série</th>
            <th>Descrição</th>
            <th>Último acesso</th>
            <th>Situação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sa15151\0s15151z5</td>
            <td>Estufa 01</td>
            <td>22/10/2019 08:55</td>
            <td>L</td>
            <td>a</td>
          </tr>
          <tr>
            <td>sa15151\0s15151z5</td>
            <td>Estufa 01</td>
            <td>22/10/2019 08:55</td>
            <td>L</td>
            <td>a</td>
          </tr>
          <tr>
            <td>sa15151\0s15151z5</td>
            <td>Estufa 01</td>
            <td>22/10/2019 08:55</td>
            <td>L</td>
            <td>a</td>
          </tr>
        </tbody>
      </ListControler>
    </Container>
  );
}
