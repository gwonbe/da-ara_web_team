import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import MyModal1 from "../pages/Menu/MyModal1";

const Container = styled.div`
  width: 100%;
  min-height: calc(var(--vh) * 100);
  background-color: #f3f2fd;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Logovideo = styled.video`
  width: 50%;
  margin-bottom: 20px;
  mask-image: -webkit-radial-gradient(white, black);
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Ebutton = styled.button`
  font-weight: bold;
  font-size: 15px;
  background-color: #e0c6e9;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

function MainPage() {
  const navigate = useNavigate();
  const [isOpen1, setOpen1] = useState(false);
  const handleClick1 = () => {
    setOpen1(true);
  };
  const handleModal1Submit = () => {
    setOpen1(false);
  };
  const handleModal1Cancel = () => setOpen1(false);
  return (
    <Container>
      <Logovideo autoPlay loop muted>
        <source src="/video/hellochar.mp4" type="video/mp4" />
      </Logovideo>
      <div>
        <Ebutton onClick={handleClick1}>로그인</Ebutton>
        <br />
        <Ebutton onClick={() => navigate("/chatpage")}> 채팅 시작하기 </Ebutton>
      </div>
      <MyModal1
        isOpen={isOpen1}
        onSubmit={handleModal1Submit}
        onCancel={handleModal1Cancel}
      />
    </Container>
  );
}

export default MainPage;
