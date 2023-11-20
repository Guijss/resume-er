import React from 'react';
import styled from 'styled-components';
import { RiLayoutLine, RiLayout3Line } from 'react-icons/ri';

const SettingsWrapper = styled.div`
  position: fixed;
  width: 10%;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SettingsSection = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.span`
  position: absolute;
  color: white;
  top: 0;
`;

const IconWrapper = styled.div`
  position: relative;
  margin: 1rem;
`;

const Line = styled.div`
  position: relative;
  width: 80%;
  border: 1px solid white;
  margin-bottom: 2rem;
`;

function SettingsBar({ setLayout }) {
  const handleLayout = (side) => {
    //1: left, 2: right
    setLayout((prev) => {
      const sidebarIndex = prev.findIndex((s) => s.id === 'sidebar');
      const mainIndex = prev.findIndex((s) => s.id === 'main');
      const layout =
        side === 1
          ? [prev[sidebarIndex], prev[mainIndex]]
          : [prev[mainIndex], prev[sidebarIndex]];
      return layout;
    });
  };
  return (
    <SettingsWrapper>
      <SettingsSection style={{ flexDirection: 'row' }}>
        <>
          <SectionTitle>Layout</SectionTitle>
          <IconWrapper>
            <RiLayout3Line
              style={{ cursor: 'pointer' }}
              onClick={() => handleLayout(1)}
              color="#fff"
              size={60}
            />
            <RiLayoutLine
              style={{ cursor: 'pointer' }}
              onClick={() => handleLayout(2)}
              color="#fff"
              size={60}
            />
          </IconWrapper>
        </>
      </SettingsSection>
      <Line />
    </SettingsWrapper>
  );
}

export default SettingsBar;
