import React, { Fragment } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom'

const Backdrop = (props) => {
  return <div className={s.backdrop} onClick={props.onHideCart}/>
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
      {createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal