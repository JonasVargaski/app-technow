import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input } from '~/components/DefaultStyle';
import { signUpRequest } from '~/store/modules/auth/actions';
import spinner from '~/assets/loading-bubbles.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(3, 'Mínimo 3 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Nome completo" />
      <Input name="email" type="email" placeholder="Seu e-mail" />
      <Input name="password" type="password" placeholder="Sua senha secreta" />

      <button type="submit">
        {loading ? (
          <>
            <img src={spinner} alt="loader" />
            Carregando...
          </>
        ) : (
          'Criar Conta'
        )}
      </button>
      <Link to="/">Já tenho login</Link>
    </Form>
  );
}
