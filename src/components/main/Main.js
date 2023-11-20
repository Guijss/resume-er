import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
  border: ${(props) =>
    props.selected === 'main' ? '1px solid rgb(200, 75, 75)' : 'none'};
  &:hover {
    border: ${(props) =>
      props.selected === 'main'
        ? '1px solid rgb(200, 75, 75)'
        : '1px dashed rgb(75, 75, 75)'};
  }
`;

const Main = ({ selected, handleClick }) => {
  return (
    <MainWrapper
      selected={selected}
      onClick={(e) => handleClick(e, 'main')}
    ></MainWrapper>
  );
};

export default Main;
