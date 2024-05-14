import { useState } from "react";
import Menu from "./Menu";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  background-color: transparent;
  float: left;
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
        <FiMenu size="40" color="#fff" />
      </Button>
      <Menu isOpen={isOpen} onCancel={handleModalCancel} />
    </div>
  );
}

export default SideBar;
