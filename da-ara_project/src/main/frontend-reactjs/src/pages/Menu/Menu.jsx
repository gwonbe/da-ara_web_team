import Modal from "react-modal";
import MyModal1 from "./MyModal1";
import MyModal2 from "./MyModal2";
import { useState } from "react";

const Menu = ({ isOpen, onCancel }) => {
  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070",
    },
    content: {
      float: "left",
      width: "340px",
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
      <div>메뉴</div>
      <button onClick={handleClickCancel}>닫기</button>
      <div>
        <button onClick={handleClick1}>로그인</button>
        <button onClick={handleClick2}>회원가입</button>
        <MyModal1 isOpen={isOpen1} onCancel={handleModal1Cancel} />
        <MyModal2 isOpen={isOpen2} onCancel={handleModal2Cancel} />
      </div>
    </Modal>
  );
};

export default Menu;
