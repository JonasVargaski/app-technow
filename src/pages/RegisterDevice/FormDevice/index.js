import React, { useState } from 'react';
import * as Yup from 'yup';
import { MdDone, MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import Spinner from '~/components/Spinner';
import Switch from '~/components/Switch';
import { Input, Button } from '~/components/DefaultStyle';
import { Container, StyledForm } from './styles';

const schema = Yup.object().shape({
  serial: Yup.string()
    .trim()
    .min(10, 'Número serial inválido')
    .required('O numero serial é obrigatório'),
  password: Yup.string()
    .trim()
    .min(3)
    .required('A senha é obrigatória'),
  description: Yup.string()
    .trim()
    .min(3, 'A descrição é obrigatória'),
});

export default function FormDevice({
  device,
  handleSubmit,
  handleCancel,
  loading,
}) {
  const [active, setActive] = useState(device?.situation !== 'inactive');

  return (
    <Container>
      <Spinner
        show={loading}
        label="Processando..."
        size={68}
        background="rgba(255,255,255,0.2)"
      />

      <StyledForm
        schema={schema}
        initialData={device}
        onSubmit={data =>
          handleSubmit({
            ...data,
            id: device.id,
            situation: active ? 'active' : 'inactive',
          })
        }
      >
        <h4>{device?.id ? 'Editar ' : 'Adicionar '}Controlador</h4>

        <Input type="text" name="serial" label="Número serial" />
        <Input type="text" name="password" label="Senha" />
        <Input type="text" name="description" label="Descrição" />

        <div>
          <button
            style={{ visibility: device?.id ? 'visible' : 'hidden' }}
            type="button"
            onClick={() => handleSubmit({ ...device, situation: 'blocked' })}
          >
            Excluir
          </button>

          <div>
            <strong>Ativo</strong>
            <Switch value={active} onChange={setActive} />
          </div>
        </div>

        <footer>
          <Button background="#444" type="button" onClick={handleCancel}>
            <MdClose size={25} color="#fff" /> Cancelar
          </Button>

          <Button background="#7560ec" type="submit">
            <MdDone size={25} color="#fff" /> Salvar
          </Button>
        </footer>
      </StyledForm>
    </Container>
  );
}

FormDevice.propTypes = {
  device: PropTypes.oneOfType([PropTypes.any]),
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

FormDevice.defaultProps = {
  device: null,
};
