// Header.jsx
import SideBar from "../pages/Menu/SideBar";
import styled from "styled-components";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import "../assets/fonts/fonts.css";

const Container = styled.div`
  min-width: 360px;
  position: fixed;
  z-index: 50;
  width: 100%;
  background-color: #152552;
  top: 0;
  padding: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  right: 15px;
`;
const Title = styled.h1`
  text-align: center;
  color: white;
  font-family: "BagleFatOne";
  margin: 0;
`;
const Header = ({ toggleVoice, isVoiceEnabled }) => {
  return (
    <>
      <Container>
        <SideBar />
        <Title>DA-ARA</Title>
        <Button onClick={toggleVoice}>
          {isVoiceEnabled ? (
            <HiMiniSpeakerXMark size="40" color="#fff" />
          ) : (
            <HiMiniSpeakerWave size="40" color="#fff" />
          )}
        </Button>
      </Container>
    </>
  );
};

export default Header;
