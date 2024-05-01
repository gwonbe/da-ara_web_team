import Modal from "react-modal";
import PropTypes from "prop-types";
import MyModal1 from "./MyModal1";
import MyModal2 from "./MyModal2";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import styled from "styled-components";
import Translate from "../../components/Translate";

const MenuHead = styled.div`
  height: 45px;
  background-color: #e0c6e9;
`;
const Button = styled.button`
  padding-top: 5px;
  padding-right: 5px;
  border: 0;
  background-color: transparent;
  float: right;
  cursor: pointer;
  box-sizing: content-box;
`;
const Ul = styled.ul`
  text-align: center;
  margin-top: 30px;
  padding: 0;
`;
const Li = styled.li`
  font-weight: bold;
  display: inline-block;
  width: 180px;
  list-style: none;
  margin: 5px 0px;
  padding: 5px 0px;
  border: 3px solid #e0c6e9;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #e0c6e9;
    transition: 0.2s;
  }
`;

const Menu = ({ isOpen, onCancel }) => {
  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070",
    },
    content: {
      float: "left",
      width: "200px",
      height: "100%",
      inset: "unset",
      margin: "50vh auto",
      padding: 0,
      transform: "translateY(-50%)",
      position: "relative",
    },
  };

  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleLoginSuccess = (userData) => {
    console.log("Login successful with user data:", userData);
    setIsLoggedIn(true);
    setUserInfo(userData);
    setOpen1(false); // Close the login modal on successful login
  };

  const handleModal1Cancel = () => setOpen1(false);
  const handleModal2Cancel = () => setOpen2(false);

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <MenuHead>
        <Button onClick={onCancel}>
          <FaXmark size="30" />
        </Button>
      </MenuHead>
      {!isLoggedIn ? (
        <Ul>
          <Li onClick={() => setOpen1(true)}>로그인</Li>
          <Li onClick={() => setOpen2(true)}>회원가입</Li>
          <Li>
            <Translate />
          </Li>
        </Ul>
      ) : (
        <Ul>
          <Li>환영합니다!{userInfo}</Li>
          <Li>
            <Translate />
          </Li>
        </Ul>
      )}
      <MyModal1
        isOpen={isOpen1}
        onCancel={handleModal1Cancel}
        onLoginSuccess={handleLoginSuccess}
      />
      <MyModal2 isOpen={isOpen2} onCancel={handleModal2Cancel} />
    </Modal>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Menu;
