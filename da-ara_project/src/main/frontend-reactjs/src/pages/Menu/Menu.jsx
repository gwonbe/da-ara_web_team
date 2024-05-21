import Modal from "react-modal";
import PropTypes from "prop-types";
import MyModal1 from "./MyModal1";
import MyModal2 from "./MyModal2";
import { useState, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import styled from "styled-components";
import Translate from "../../components/Translate";
import axios from "axios";
import LogoutModal from "./LogoutModal";
import "./menu.css";
import GuideModal from "./GuideModal";

const MenuHead = styled.div`
  height: 45px;
  background-color: #152552;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Button = styled.button`
  padding-top: 5px;
  padding-right: 5px;
  border: 0;
  background-color: transparent;
  position: absolute;
  right: 10px;
  cursor: pointer;
  box-sizing: content-box;
`;
const Ul = styled.ul`
  text-align: center;
  margin-top: 30px;
  padding: 0;
`;
const Li = styled.li`
  // font-family: "NanumSquareRoundEB";
  font-weight: bold;
  display: inline-block;
  width: 180px;
  list-style: none;
  margin: 5px 0px;
  padding: 5px 0px;
  border: 3px solid #152552;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #152552;
    transition: 0.2s;
    color: white;
  }
`;
const NameLi = styled.li`
  font-weight: bold;
  display: inline-block;
  width: 180px;
  list-style: none;
  margin: 5px 0px;
  padding: 5px 0px;
`;
const Img2 = styled.img`
  width: 8vh;
  bottom: 10%;
`;
const Img = styled.img`
  width: 18vh;
  position: absolute;
  bottom: 10vh; /* 하단에서 10px 위치 */
  left: 50%;
  transform: translateX(-50%);
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
      height: "100vh",
      inset: "unset",
      margin: "50vh auto",
      padding: 0,
      transform: "translateY(-50%)",
      position: "relative",
    },
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/daara")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleModal1Cancel = () => setOpen1(false);
  const handleModal2Cancel = () => setOpen2(false);
  const handleModal3Cancel = () => setOpen3(false);
  const handleModal4Cancel = () => setOpen4(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  localStorage.setItem("userID", data[0]);

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <MenuHead>
        <Img2 src="/logo/firsthallym.png" alt="" />
        <Button onClick={onCancel}>
          <FaXmark size="30" color="#fff" />
        </Button>
      </MenuHead>

      <Ul>
        {data && data[2] ? (
          <>
            <NameLi>{`${data[2]} 님`}</NameLi>
            <Li onClick={() => setOpen3(true)}>로그아웃</Li>
            <Li onClick={() => setOpen4(true)}>이용 가이드</Li>
            <Li onClick={toggleDropdown}>언어 변경</Li>
            <Translate isDropdownOpen={isDropdownOpen} />
            <Img src="/logo/bluelogo.png" alt="" />
          </>
        ) : (
          <>
            <Li onClick={() => setOpen1(true)}>로그인</Li>
            <Li onClick={() => setOpen2(true)}>회원가입</Li>
            <Li onClick={() => setOpen4(true)}>이용 가이드</Li>
            <Li onClick={toggleDropdown}>언어 변경</Li>
            <Translate isDropdownOpen={isDropdownOpen} />
            <Img src="/logo/bluelogo.png" alt="" />
          </>
        )}
      </Ul>
      <MyModal1 isOpen={isOpen1} onCancel={handleModal1Cancel} />
      <MyModal2 isOpen={isOpen2} onCancel={handleModal2Cancel} />
      <LogoutModal isOpen={isOpen3} onCancel={handleModal3Cancel} />
      <GuideModal isOpen={isOpen4} onCancel={handleModal4Cancel} />
    </Modal>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Menu;
