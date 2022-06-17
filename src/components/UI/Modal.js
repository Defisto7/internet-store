import React, { Fragment } from 'react';
import s from './Modal.module.css';
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return <div className={s.backdrop}/>
};

const ModalOverlay = (props) => {
  return <div className={s.modal}>
    <div className={s.content}>{props.children}</div>
  </div>;
};

const portalElement = document.getElementById('overlays')

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal