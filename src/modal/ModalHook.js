import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const ModalHook = ({ children }) => {
  const elRef = useRef(null);
  // make sure you only create modal once
  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);
    // returning a function out of useEffect() HOOK indicated to unmout/clear elem
    return () => modalRoot.removeChild(elRef.current);
  }, []); // [] indicates for useEffect to run only once
  return createPortal(<div>{children}</div>, elRef.current);
};

export default ModalHook;
