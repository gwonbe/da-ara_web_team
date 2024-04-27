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

  const handleClickCancel = () => {
    onCancel();
  };

  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  const handleClick1 = () => {
    setOpen1(true);
  };
  const handleClick2 = () => {
    setOpen2(true);
  };
  const handleModal1Cancel = () => setOpen1(false);
  const handleModal2Cancel = () => setOpen2(false);
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <MenuHead>
        <Button onClick={handleClickCancel}>
          <FaXmark size="30" />
        </Button>
      </MenuHead>

      <Ul>
        <Li onClick={handleClick1}>로그인</Li>
        <Li onClick={handleClick2}>회원가입</Li>
        <Li>
          <Translate />
        </Li>
        <MyModal1 isOpen={isOpen1} onCancel={handleModal1Cancel} />
        <MyModal2 isOpen={isOpen2} onCancel={handleModal2Cancel} />
      </Ul>
    </Modal>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen에 대한 prop 유효성 검사를 추가합니다.
  onCancel: PropTypes.func.isRequired, // onCancel에 대한 prop 유효성 검사를 추가합니다.
};

export default Menu;
