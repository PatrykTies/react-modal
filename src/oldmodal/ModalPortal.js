import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Modal from './Modal';

const ModalPortal = (props) => {
  return ReactDOM.createPortal(<Modal toggle={props.toggle}/>, document.querySelector('#modal'));
};

export default ModalPortal;
