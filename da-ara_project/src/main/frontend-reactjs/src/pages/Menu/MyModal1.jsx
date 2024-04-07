import Modal from "react-modal";
import LoginPage from "../Login/LoginPage";

const MyModal1 = ({ isOpen, onCancel }) => {
  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070",
    },
    content: {
      height: "300px",
      width: "300px",
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
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div>
        <LoginPage />
      </div>
      <div>
        <button onClick={handleClickCancel}>닫기</button>
      </div>
    </Modal>
  );
};

export default MyModal1;
