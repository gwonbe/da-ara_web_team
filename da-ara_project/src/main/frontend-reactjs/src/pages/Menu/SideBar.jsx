import { useState } from "react";
import Menu from "./Menu";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  border: 0;
  background-color: transparent;
  float: left;
  left: 10px;
  cursor: pointer;
`;

function SideBar() {
  const [isOpen, setOpen] = useState(false);

  const openModalHandler = () => {
    setOpen(!isOpen);
  };

  const handleModalCancel = () => setOpen(false);

  return (
    <div>
      <Button onClick={openModalHandler}>
        <FiMenu size="40" />
      </Button>
      <Menu isOpen={isOpen} onCancel={handleModalCancel} />
    </div>
  );
}

export default SideBar;
