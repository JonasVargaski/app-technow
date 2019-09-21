import React from 'react';
import {
  FaThermometerHalf,
  FaCloudSunRain,
  FaVolumeUp,
  FaClock,
  FaCloud,
  FaCaretRight,
  FaUnlockAlt,
} from 'react-icons/fa';

import { Container, Card } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Card>
        <div>
          <FaThermometerHalf size={60} color="#E53935" />
          <div>
            <h4>Temperatura</h4>
            <span>56 °C</span>
          </div>
          <div>
            <h4>Ajuste</h4>
            <span>64 °C</span>
          </div>
        </div>
        <span>Indicador de temperatura</span>
      </Card>
      <Card>
        <div>
          <FaCloudSunRain size={60} color="#9fdff7" />
          <div>
            <h4>Umidade</h4>
            <span>41 %</span>
          </div>
          <div>
            <h4>Ajuste</h4>
            <span>37% </span>
          </div>
        </div>
        <span>Indicador de Umidade</span>
      </Card>
      <Card>
        <div>
          <FaVolumeUp size={60} color="#ff9537" />
          <div>
            <h4>Alarme</h4>
            <span>Ligado</span>
          </div>
        </div>
        <span>Indicador do Status de Alarme</span>
      </Card>
      <Card>
        <div>
          <FaClock size={60} color="#8980c0" />
          <div>
            <h4>Fase</h4>
            <span>Murchamento</span>
          </div>
        </div>
        <span>Indicador de Fase</span>
      </Card>
      <Card>
        <div>
          <FaCloud size={60} color="#2596eb" />
          <div>
            <h4>Clima</h4>
            <span>Seco</span>
          </div>
        </div>
        <span>Indicador de Clima</span>
      </Card>
      <Card>
        <div>
          <FaCaretRight size={60} color="#f8b900" />
          <div>
            <h4>Ventoinha</h4>
            <span>Desligada</span>
          </div>
        </div>
        <span>Indicador do status da Ventoinha</span>
      </Card>
      <Card>
        <div>
          <FaUnlockAlt size={60} color="#589167" />
          <div>
            <h4>Trava de fase</h4>
            <span>Destravado</span>
          </div>
        </div>
        <span>Indicador do Status da Trava de Fase</span>
      </Card>
    </Container>
  );
}
