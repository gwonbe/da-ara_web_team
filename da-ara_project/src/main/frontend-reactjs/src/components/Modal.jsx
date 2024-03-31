import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalBg = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffffe2;
`;

const ModalBox = styled.div`
  width: 25rem;
  background-color: white;
  padding: 2rem;
`;

const Modal = ({ closeModal, content }) => {
  return createPortal(
    <ModalBg>
      <ModalBox>
        {content}
        <button onClick={closeModal}>Close</button>
      </ModalBox>
    </ModalBg>,
    document.getElementById("modal")
  );
};

export default Modal;
