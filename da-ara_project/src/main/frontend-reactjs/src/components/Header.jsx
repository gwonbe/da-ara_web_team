import Sidebar from "../pages/Menu/Sidebar";
import styled from "styled-components";

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

const Title = styled.div`
  float: left;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.5em;
  padding: 5px;
  font-weight: bold;
  text-align: center;
`;

const Header = () => {
  return (
    <Container>
      <Sidebar width={320}></Sidebar>
      <Title>DA-ARA</Title>
    </Container>
  );
};

export default Header;
