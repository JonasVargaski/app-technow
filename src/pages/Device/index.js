import React from 'react';

import { Form, Input, Button } from '~/components/DefaultStyle';
import { Col, Row } from '~/components/Grid';

import { Container } from './styles';

export default function Devices() {
  return (
    <Container>
      <h3>Controladores</h3>
      <Form initialData={{}} schema={{}} onSubmit={() => {}}>
        <Row>
          <Col xs="12" sm="3">
            <Input name="serial" label="Numero de série" />
          </Col>
          <Col xs="12" sm="3">
            <Input type="password" name="password" label="Senha" />
          </Col>
          <Col xs="12" sm="6">
            <Input name="description" label="Apelido" />
          </Col>
        </Row>

        <div>
          <Button type="submit">Salvar</Button>
        </div>
      </Form>
    </Container>
  );
}
