// import Chatting from "./Chatting";
import Header from "../../components/Header";
import styled from "styled-components";
import "./chat.css";
import ChatWindow from "./ChatWindow";
const Container = styled.div`
  min-width: 360px;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: hidden;
  min-height: 100%;
  background: #f3f2fd;
  min-height: calc(var(--vh) * 100);
  width: 100%;
`;

const Video = styled.video`
  outline: none;
  border: 0;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
`;

const ChatPage = () => {
  return (
    <Container>
      <Header />
      <Video autoPlay loop width="400px" height="300px">
        <source src="../../../public/video/character.mp4" type="video/mp4" />
      </Video>
      <ChatWindow />
    </Container>
  );
};

export default ChatPage;
