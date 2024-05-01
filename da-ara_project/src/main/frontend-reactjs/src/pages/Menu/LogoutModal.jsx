import Modal from "react-modal";
import LogoutPage from "../Login/LogoutPage";

const LogoutModal = ({ isOpen, onCancel }) => {
  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070",
    },
    content: {
      height: "400px",
      width: "400px",
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
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={handleClickCancel}
    >
      <div>
        <LogoutPage />
      </div>
      <div>
        <button onClick={handleClickCancel} aria-label="Close modal">
          돌아가기
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
