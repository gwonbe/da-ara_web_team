import { useState } from "react";
import Menu from "./Menu";

function SideBar() {
  const [isOpen, setOpen] = useState(false);

  const openModalHandler = () => {
    setOpen(!isOpen);
  };

  const handleModalCancel = () => setOpen(false);

  return (
    <div>
      <button onClick={openModalHandler}>모달 열기</button>
      <Menu isOpen={isOpen} onCancel={handleModalCancel} />
    </div>
  );
}

export default SideBar;
