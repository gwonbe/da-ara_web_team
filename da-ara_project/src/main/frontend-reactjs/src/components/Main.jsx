import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: calc(var(--vh) * 100);
  background-color: #dfefff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Logoimg = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const Ebutton = styled.button`
  background-color: #093555;
  color: white;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
`;

function MainPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Logoimg src="src\assets\images\심신안정용.jpg" alt="" />
      <Ebutton onClick={() => navigate("/login")}>로그인하러 가기</Ebutton>
      <br />
      <Ebutton onClick={() => navigate("/chatpage")}> 채팅 시작하기 </Ebutton>
    </Container>
  );
}

export default MainPage;
