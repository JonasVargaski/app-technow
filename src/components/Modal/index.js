import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Wrapper, Container, Header, Body, Footer } from './styles';
import './modal.css';

const Modal = ({ show, toogle, children, width, maskClosabe }) => {
  useEffect(() => {
    if (show) {
      const app = document.getElementById('root');
      if (app) app.classList.add('modal-blur');
    } else {
      const app = document.getElementById('root');
      if (app) app.classList.remove('modal-blur');
    }
  }, [show]);

  function handleOverlayClicked(e) {
    if (e.target.getAttribute('role') === 'dialog' && maskClosabe) {
      toogle(!show);
    }
  }

  return show
    ? ReactDOM.createPortal(
      <Wrapper
        onClick={handleOverlayClicked}
        aria-modal
        aria-hidden
        tabIndex="-1"
        role="dialog"
      >
        <Container width={width}>{children}</Container>
      </Wrapper>,
      document.body
    )
    : null;
};

const ModalHeader = ({ children, onClose }) => (
  <Header>
    {children}
    <button type="button" onClick={() => onClose(false)}>
      <MdClose size={27} color="#555" />
    </button>
  </Header>
);

Modal.Header = ModalHeader;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

Modal.propTypes = {
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  toogle: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  width: PropTypes.string,
  maskClosabe: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  width: null,
  maskClosabe: false,
  toogle: () => { },
};

ModalHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  onClose: PropTypes.func.isRequired,
};

ModalHeader.defaultProps = {
  children: null,
};
