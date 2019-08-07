import React from 'react';
import { FaThermometerHalf } from 'react-icons/fa';

import { Container, Card } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Card>
        <div>
          <FaThermometerHalf size={60} color="#E53935" />
          <div>
            <h4>Temperatura</h4>
            <strong>53 °C</strong>
          </div>
          <div>
            <h4>Ajuste</h4>
            <strong>64 °C</strong>
          </div>
        </div>
        <span>Indicador de temperatura</span>
      </Card>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}
