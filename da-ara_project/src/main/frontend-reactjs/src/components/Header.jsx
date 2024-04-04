// Header.jsx
// import styled from "styled-components";
// import Modal from "../pages/Menu/SideModal";
import SideBar from "../pages/Menu/SideBar";
import styled from "styled-components";

const Container = styled.div`
  min-width: 360px;
  position: fixed;
  z-index: 50;
  width: 100%;
  background-color: white;
  top: 0;
  padding: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const Title = styled.h1`
  text-align: center;
`;

const Header = () => {
  return (
    <Container>
      <SideBar />
      <Title>DA-ARA</Title>
    </Container>
  );
};

export default Header;
