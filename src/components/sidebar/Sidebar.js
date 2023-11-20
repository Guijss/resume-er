import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
  border: ${(props) =>
    props.selected === 'sidebar' ? '1px solid rgb(200, 75, 75)' : 'none'};
  &:hover {
    border: ${(props) =>
      props.selected === 'sidebar'
        ? '1px solid rgb(200, 75, 75)'
        : '1px dashed rgb(75, 75, 75)'};
  }
`;

const Sidebar = ({ selected, handleClick }) => {
  return (
    <SidebarWrapper
      selected={selected}
      onClick={(e) => handleClick(e, 'sidebar')}
    ></SidebarWrapper>
  );
};

export default Sidebar;
