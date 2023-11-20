import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar/Sidebar';
import SettingsBar from './settingsBar/SettingsBar';
import Main from './main/Main';
import Title from './title/Title';
import { RxZoomIn, RxZoomOut } from 'react-icons/rx';

const AppWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  background-color: rgb(15, 17, 21);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 5rem;
`;

const PapeWrapper = styled.div`
  position: relative;
  width: calc(210mm * 1.6);
  height: calc(297mm * 1.6);
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
  appearance: none;
  width: 200px;
  height: 10px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(15, 17, 21);
    border: 2px solid beige;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: rgb(15, 17, 21);
    border: 2px solid beige;
    cursor: pointer;
  }
`;

const initialLayout = [
  { id: 'sidebar', CompName: Sidebar },
  { id: 'main', CompName: Main },
];

export const ZoomContext = createContext(null);

function Page() {
  const [layout, setLayout] = useState(initialLayout);
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(1.6);

  const handleClick = (event, selection) => {
    event.stopPropagation(); //stopping propagation because we want to remove selection when clicking out of section.
    setSelected(selection);
  };

  const handleSlider = (event) => {
    setZoom(event.target.value);
  };
  return (
    <ZoomContext.Provider value={zoom}>
      <AppWrapper onClick={(e) => handleClick(e, null)}>
        <SettingsBar setLayout={setLayout} />
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
            max="1.6"
            value={zoom}
            step="0.01"
            onChange={handleSlider}
          ></ZoomSlider>
          <RxZoomIn style={{ margin: '5px' }} size={25} color="white" />
        </ZoomWrapper>
      </AppWrapper>
    </ZoomContext.Provider>
  );
}

export default Page;
