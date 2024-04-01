import { useState } from "react";
// import styled from "styled-components";
import MyModal1 from "./MyModal1";
import MyModal2 from "./MyModal2";

function SideBarContent() {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  const handleClick1 = () => {
    setOpen1(true);
  };
  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleModal1Submit = () => {
    setOpen1(false);
  };
  const handleModal2Submit = () => {
    setOpen2(false);
  };

  const handleModal1Cancel = () => setOpen1(false);
  const handleModal2Cancel = () => setOpen2(false);

  return (
    <div>
      <button onClick={handleClick1}>로그인</button>
      <button onClick={handleClick2}>회원가입</button>
      <MyModal1
        isOpen={isOpen1}
        onSubmit={handleModal1Submit}
        onCancel={handleModal1Cancel}
      />
      <MyModal2
        isOpen={isOpen2}
        onSubmit={handleModal2Submit}
        onCancel={handleModal2Cancel}
      />
    </div>
  );
}

export default SideBarContent;
