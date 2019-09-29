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

import { Button } from '~/components/DefaultStyle';

import Modal from '~/components/Modal';

export default function Dashboard() {
  const devices = useSelector(state => state.device.devices);
  const [loader, setLoader] = useState(false);
  const [device, setDevice] = useState(null);
  const [deviceData, setDeviceData] = useState({});

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (device) {
      setLoader(true);
      socket.emit('get:device', { id: device.id });

      setTimeout(() => {
        setLoader(false);
      }, 2000);

      socket.on(`device:real-time`, data => {
        console.tron.log(data);
        setLoader(false);
        setDeviceData(data);
      });
    }
    return () => {
      socket.off(`device:real-time`);
    };
  }, [device]);

  return (
    <>
      <Modal show={modal} toogle={setModal} width="650px">
        <Modal.Header>teste</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non
        </Modal.Body>
        <Modal.Footer>
          <Button background="#1b1c1d" onClick={() => setModal(false)}>
            Cancelar
          </Button>
          <Button background="#1dca46" onClick={() => setModal(false)}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

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
          <Col>
            <b>Status :</b>
            <span> Online</span>
          </Col>
          <Col>
            <b>Útima conexão em :</b>
            <span> 29/09/2019 01:00:25</span>
          </Col>
          <Col>
            <Button onClick={() => setModal(true)}>Modal</Button>
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
                <span>{deviceData.temp}</span>
              </div>
              <div>
                <h4>Ajuste</h4>
                <span>{deviceData.tempAjust}</span>
              </div>
            </div>
            <span>Indicador de temperatura</span>
          </Card>
          <Card>
            <div>
              <FaCloudSunRain size={60} color="#9fdff7" />
              <div>
                <h4>Umidade</h4>
                <span>{deviceData.umid}</span>
              </div>
              <div>
                <h4>Ajuste</h4>
                <span>
                  {deviceData.umidAjust}
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
                <span>{deviceData.phase}</span>
              </div>
            </div>
            <span>Indicador de Fase</span>
          </Card>
          <Card>
            <div>
              <FaCloud size={60} color="#2596eb" />
              <div>
                <h4>Clima</h4>
                <span>{deviceData.climate}</span>
              </div>
            </div>
            <span>Indicador de Clima</span>
          </Card>
          <Card>
            <div>
              <FaUnlockAlt size={60} color="#589167" />
              <div>
                <h4>Trava de fase</h4>
                <span>{deviceData.phaseLock}</span>
              </div>
            </div>
            <span>Indicador do Status da Trava de Fase</span>
          </Card>
        </Container>
      )}
    </>
  );
}
