import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border: ${(props) =>
    props.selected === 'title' ? '1px solid rgb(200, 75, 75)' : 'none'};
  &:hover {
    border: ${(props) =>
      props.selected === 'title'
        ? '1px solid rgb(200, 75, 75)'
        : '1px dashed rgb(75, 75, 75)'};
  }
`;

function Title({ selected, handleClick }) {
  return (
    <TitleWrapper
      selected={selected}
      onClick={(e) => handleClick(e, 'title')}
    ></TitleWrapper>
  );
}

export default Title;
