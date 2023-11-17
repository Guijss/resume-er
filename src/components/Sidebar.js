import React, { useState } from 'react';
import styled from 'styled-components';
import { RiLayout3Fill, RiLayoutFill } from 'react-icons/ri';
import { IoMdSettings } from 'react-icons/io';
import Modal from './supporters/Modal';

const SidebarWrapper = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
  border: ${(props) =>
    props.selected === 'sidebar' ? '2px dashed rgb(200, 75, 75)' : 'none'};
  &:hover {
    border: ${(props) =>
      props.selected === 'sidebar'
        ? '2px dashed rgb(200, 75, 75)'
        : '2px dashed rgb(75, 75, 75)'};
  }
`;

const SettingsIcon = styled.div`
  position: absolute;
  right: 0;
`;

const Sidebar = ({ selected, handleClick }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <SidebarWrapper
      selected={selected}
      onClick={(e) => handleClick(e, 'sidebar')}
    >
      {selected === 'sidebar' && (
        <>
          <SettingsIcon onClick={() => setIsSettingsOpen((prev) => !prev)}>
            <IoMdSettings size={48} color="rgb(15, 17, 21)" />
          </SettingsIcon>
          <Modal isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen}>
            <div style={{ width: '500px', height: '500px' }}></div>
          </Modal>
        </>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
