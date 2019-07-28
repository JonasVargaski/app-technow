import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Input, Form, Button } from '~/components/DefaultStyle';
import { Row, Col } from '~/components/Grid';
import { Card } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Card>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <h3>Perfil</h3>
        <div>
          <AvatarInput name="avatar_id" />
        </div>

        <Row>
          <Col xs="12" sm="5">
            <Input name="name" label="Nome Completo" />
          </Col>
          <Col xs="12" sm="3">
            <Input name="email" disabled label="E-mail" />
          </Col>
        </Row>

        <Input type="password" name="oldPassword" label="Senha atual" />
        <Input type="password" name="password" label="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirmação de senha"
        />

        <h3>Endereço</h3>

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <Button type="submit">Atualizar perfil</Button>
      </Form>
    </Card>
  );
}
