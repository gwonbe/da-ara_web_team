import Modal from "react-modal";
// import "./Modal.css";
import Guide from "./Guide";

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
    >
      <Guide handleClickCancel={handleClickCancel} />
    </Modal>
  );
};

export default GuideModal;
