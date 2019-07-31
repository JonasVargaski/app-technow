import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Input, Form, Button } from '~/components/DefaultStyle';
import { Card } from './styles';

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(4, 'Necessário no minimo 3 caracteres')
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field.required().min(3, 'Necessário no minimo 3 caracteres')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required()
          .oneOf([Yup.ref('password')], 'As senhas precisam ser iguais')
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Card>
      <h3>Perfil</h3>
      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" label="Nome Completo" />
        <Input name="email" disabled label="E-mail" />
        <Input type="password" name="oldPassword" label="Senha atual" />
        <Input type="password" name="password" label="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirmação de senha"
        />
        <div>
          <Button type="submit">Atualizar perfil</Button>
        </div>
      </Form>
    </Card>
  );
}
