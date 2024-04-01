import Modal from "react-modal";
import SignupPage from "../Login/SignupPage";

const MyModal2 = ({ isOpen, onCancel }) => {
  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070",
    },
    content: {
      height: "200px",
      width: "800px",
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
      <SignupPage />
      <div>
        <button onClick={handleClickCancel}>닫기</button>
      </div>
    </Modal>
  );
};

export default MyModal2;
