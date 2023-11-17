import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  filter: blur(8px);
  z-index: 99;
`;

const ModalWindow = styled.div`
  position: absolute;
  background-color: rgb(15, 17, 21);
  z-index: 100;
  transition: opacity 0.5s ease;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.5);
`;

const Modal = (props) => {
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
        style={{
          visibility: props.isOpen ? 'visible' : 'hidden',
          opacity: props.isOpen ? '1' : '0',
          right: -modalRect.width - 10,
          top: -2,
        }}
        onClick={(e) => stopPropagation(e)}
        ref={modalRef}
      >
        {props.children}
      </ModalWindow>
      <Backdrop
        style={{
          visibility: props.isOpen ? 'visible' : 'hidden',
          opacity: props.isOpen ? '0.2' : '0',
        }}
        onClick={() => props.setIsOpen(false)}
      />
    </>
  );
};

export default Modal;
