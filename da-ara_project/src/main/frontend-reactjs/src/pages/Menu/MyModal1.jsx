import PropTypes from "prop-types"; // PropTypes를 임포트합니다.
import Modal from "react-modal";
import LoginPage from "../Login/LoginPage";

const MyModal1 = ({ isOpen, onCancel }) => {
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

MyModal1.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen에 대한 prop 유효성 검사를 추가합니다.
  onCancel: PropTypes.func.isRequired, // onCancel에 대한 prop 유효성 검사를 추가합니다.
};

export default MyModal1;
