import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Backdrop = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  filter: blur(8px);
  z-index: 99;
`;

const ModalWindow = styled(motion.div)`
  position: absolute;
  background-color: rgb(15, 17, 21);
  z-index: 100;
  transition: opacity 0.5s ease;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.5);
`;

const Modal = ({ children, setIsOpen }) => {
  const modalRef = useRef(null);

  const [modalRect, setModalRect] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const w = modalRef.current.clientWidth;
    const h = modalRef.current.clientHeight;
    setModalRect({ width: w, height: h });
  }, []);

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <ModalWindow
        style={{ right: -modalRect.width - 3, top: -3 }}
        onClick={(e) => stopPropagation(e)}
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.5, translateX: 300 }}
        animate={{ opacity: 1, scale: 1, translateX: 0 }}
        exit={{ opacity: 0, scale: 0.5, translateX: 0 }}
      >
        {children}
      </ModalWindow>
      <Backdrop
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.3,
        }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Modal;
