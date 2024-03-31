import { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal from "../../components/Modal";
import SignupPage from "../Login/SignupPage";
import LoginPage from "../Login/LoginPage";

const Box = styled.div`
  width: 250px;
  height: 100%;
  background-color: blue;
  text-align: left;
  padding: 0;
`;

function SideModal() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
    setModalContent(null);
  };
  return (
    <Box>
      <button onClick={() => openModal(<LoginPage closeModal={closeModal} />)}>
        Open Login
      </button>
      <button onClick={() => openModal(<SignupPage closeModal={closeModal} />)}>
        Open Signup
      </button>
      {modalShow &&
        ReactDOM.createPortal(
          <Modal closeModal={closeModal} content={modalContent} />,
          document.getElementById("modal")
        )}
    </Box>
  );
}

export default SideModal;
