import Modal from "react-modal";
import "./Modal.css";

const GuideModal = ({ isOpen, onCancel }) => {
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
    ></Modal>
  );
};

export default GuideModal;
