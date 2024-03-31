// Header.jsx
import styled from "styled-components";
import Modal from "../pages/Menu/SideModal";
import { useEffect, useState, useRef } from "react";

const Container = styled.div`
  min-width: 360px;
  position: fixed;
  top: 0;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 50;
  height: 50px;
  width: 100%;
  background: #fff;
`;

const Title = styled.h1`
  float: left;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.5em;
  padding: 5px;
  font-weight: bold;
  text-align: center;
`;
const SideBar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
`;
const Button = styled.button`
  background-color: #fff;
  top: 7px;
  width: 40px;
  height: 50px;
  transition: 0.8s ease;
  overflow: hidden;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: medium;
`;

const Header = () => {
  const el = useRef();
  const [modal, setModal] = useState(false);

  const handleCloseModal = (e) => {
    if (modal && (!el.current || !el.current.contains(e.target)))
      setModal(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  });

  return (
    <Container>
      <Title>DA-ARA</Title>
      <SideBar ref={el}>
        <Button
          onClick={() => {
            modal === true ? setModal(false) : setModal(true);
          }}
        >
          메뉴
        </Button>
        {modal === true ? <Modal /> : null}
      </SideBar>
    </Container>
  );
};

export default Header;
