import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  FaThermometerHalf,
  FaCloudSunRain,
  FaVolumeUp,
  FaClock,
  FaCloud,
  FaUnlockAlt,
  FaWind,
} from 'react-icons/fa';

import socket from '~/services/socket';

import { Col, Row } from '~/components/Grid';
import Select from '~/components/Select';
import Spinner from '~/components/Spinner';
import { Container, Card, SelectDeviceCard } from './styles';

export default function Monitoring() {
  const devices = useSelector(state => state.device.devices);
  const [loader, setLoader] = useState(false);
  const [device, setDevice] = useState(null);
  const [deviceData, setDeviceData] = useState({});

  useEffect(() => {
    if (device) {
      setLoader(true);
      socket.emit('get:device', { device });

      socket.on(`device:real-time`, data => {
        setDeviceData({
          ...data,
          labelSensorUmid: data.typeSensor === 1 ? ' %' : ' °F',
          labelAlarm: data.alarm ? 'Ligado' : 'Desligado',
          labelFan: data.fan ? 'Ligada' : 'Desligada',
          labelPhase: data.phase,
          labelClimate: data.climate,
          labelPhaseLock: data.lock ? 'Travado' : 'Destravado',
        });
        setLoader(false);
      });
    }
    return () => {
      socket.off(`device:real-time`);
    };
  }, [device]);

  return (
    <>
      <SelectDeviceCard>
        <Row>
          <Col xs="12" sm="6" md="4" lg="3">
            <Select
              label="Controlador"
              attribute="description"
              options={devices}
              defaultValue={devices[0]}
              value={device}
              placeholder="Selecione um Controlador"
              onChange={setDevice}
            />
          </Col>
        </Row>
      </SelectDeviceCard>

      {devices.length > 0 && (
        <Container>
          <Spinner
            show={loader}
            label="Obtendo dados. Aguarde..."
            size={68}
            background="rgba(255,255,255,0.2)"
          />
          <Card>
            <div>
              <FaThermometerHalf size={60} color="#E53935" />
              <div>
                <h4>Temperatura</h4>
                <span>{deviceData.temp} °F</span>
              </div>
              <div>
                <h4>Ajuste</h4>
                <span>{deviceData.tempAdj} °F</span>
              </div>
            </div>
            <span>Indicador de temperatura</span>
          </Card>
          <Card>
            <div>
              <FaCloudSunRain size={60} color="#9fdff7" />
              <div>
                <h4>Umidade</h4>
                <span>
                  {deviceData.umid}
                  {deviceData.labelSensorUmid}
                </span>
              </div>
              <div>
                <h4>Ajuste</h4>
                <span>
                  {deviceData.umidAdj}
                  {deviceData.labelSensorUmid}
                </span>
              </div>
            </div>
            <span>Indicador de Umidade</span>
          </Card>
          <Card>
            <div>
              <FaVolumeUp size={60} color="#ff9537" />
              <div>
                <h4>Alarme</h4>
                <span>{deviceData.labelAlarm}</span>
              </div>
            </div>
            <span>Indicador do Status de Alarme</span>
          </Card>
          <Card>
            <div>
              <FaWind size={60} color="#f8b900" />
              <div>
                <h4>Ventoinha</h4>
                <span>{deviceData.labelFan}</span>
              </div>
            </div>
            <span>Indicador do status da Ventoinha</span>
          </Card>
          <Card>
            <div>
              <FaClock size={60} color="#8980c0" />
              <div>
                <h4>Fase</h4>
                <span>{deviceData.labelPhase}</span>
              </div>
            </div>
            <span>Indicador de Fase</span>
          </Card>
          <Card>
            <div>
              <FaCloud size={60} color="#2596eb" />
              <div>
                <h4>Clima</h4>
                <span>{deviceData.labelClimate}</span>
              </div>
            </div>
            <span>Indicador de Clima</span>
          </Card>
          <Card>
            <div>
              <FaUnlockAlt size={60} color="#589167" />
              <div>
                <h4>Trava de fase</h4>
                <span>{deviceData.labelPhaseLock}</span>
              </div>
            </div>
            <span>Indicador do Status da Trava de Fase</span>
          </Card>
        </Container>
      )}
    </>
  );
}