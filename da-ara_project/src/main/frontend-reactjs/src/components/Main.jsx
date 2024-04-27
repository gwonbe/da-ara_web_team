import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  height: 40vh;
  margin-bottom: 20px;
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
// 동영상 경로
// - 자바 : "../video/hellochar.mp4"
// - 리액트 : "../../../public/video/hellochar.mp4"

function MainPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Logovideo autoPlay loop muted>
        <source src="/video/hellochar.mp4" type="video/mp4" />
      </Logovideo>
      <div>
        <Ebutton onClick={() => navigate("/login")}>로그인하러 가기</Ebutton>
        <br />
        <Ebutton onClick={() => navigate("/chatpage")}> 채팅 시작하기 </Ebutton>
      </div>
    </Container>
  );
}

export default MainPage;
