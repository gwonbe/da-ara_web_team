import Modal from "react-modal";
import LogoutPage from "../Login/LogoutPage";
import "./Modal.css";

const LogoutModal = ({ isOpen, onCancel }) => {
  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070",
    },
  };

  const handleClickCancel = () => {
    onCancel();
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      className="modal-content"
      onRequestClose={handleClickCancel}
    >
      <LogoutPage handleClickCancel={handleClickCancel} />
    </Modal>
  );
};

export default LogoutModal;
