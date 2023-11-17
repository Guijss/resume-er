import React, { useState, createContext, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Main from './Main';
import { v4 as uuid } from 'uuid';
import Title from './Title';
import { RxZoomIn, RxZoomOut } from 'react-icons/rx';

const AppWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  background-color: rgb(15, 17, 21);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 20rem;
`;

const PapeWrapper = styled.div`
  position: relative;
  width: 420mm;
  height: 594mm;
  display: flex;
  background-color: white;
  flex-direction: column;
  padding: 1rem;
`;

const SidebarMainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
`;

const ZoomWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const ZoomSlider = styled.input`
  position: relative;
  width: 200px;
  height: 10px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const initialLayout = [
  { id: uuid(), CompName: Sidebar },
  { id: uuid(), CompName: Main },
];

const ThemeContext = createContext(null);

function Page() {
  const [layout, setLayout] = useState(initialLayout);
  const [selected, setSelected] = useState(null);
  const [theme, setTheme] = useState({ bg: 'cream', paper: 'white' });
  const [zoom, setZoom] = useState(2);

  const handleClick = (event, selection) => {
    event.stopPropagation();
    setSelected(selection);
  };

  const handleSlider = (event) => {
    setZoom(event.target.value);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <AppWrapper onClick={(e) => handleClick(e, null)}>
        <PapeWrapper
          style={{ width: `${210 * zoom}mm`, height: `${297 * zoom}mm` }}
          onClick={(e) => handleClick(e, null)}
        >
          <Title selected={selected} handleClick={handleClick} />
          <SidebarMainWrapper>
            {layout.map((item) => (
              <item.CompName
                key={item.id}
                selected={selected}
                handleClick={handleClick}
              />
            ))}
          </SidebarMainWrapper>
        </PapeWrapper>
        <ZoomWrapper>
          <RxZoomOut style={{ margin: '5px' }} size={25} color="white" />
          <ZoomSlider
            type="range"
            min="0.6"
            max="2"
            value={zoom}
            step="0.01"
            onChange={handleSlider}
          ></ZoomSlider>
          <RxZoomIn style={{ margin: '5px' }} size={25} color="white" />
        </ZoomWrapper>
      </AppWrapper>
    </ThemeContext.Provider>
  );
}

export default Page;
