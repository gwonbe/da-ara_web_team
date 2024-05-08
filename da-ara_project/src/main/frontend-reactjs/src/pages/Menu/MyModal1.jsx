import PropTypes from "prop-types"; // PropTypes를 임포트합니다.
import Modal from "react-modal";
import LoginPage from "../Login/LoginPage";
import "./Modal.css";

const MyModal1 = ({ isOpen, onCancel }) => {
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
      <LoginPage handleClickCancel={handleClickCancel} />
    </Modal>
  );
};

MyModal1.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen에 대한 prop 유효성 검사를 추가합니다.
  onCancel: PropTypes.func.isRequired, // onCancel에 대한 prop 유효성 검사를 추가합니다.
};

export default MyModal1;
