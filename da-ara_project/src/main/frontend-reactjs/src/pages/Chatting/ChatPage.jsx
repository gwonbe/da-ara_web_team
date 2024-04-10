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

const ChatPage = () => {
  return (
    <Container>
      <Header />
      <ChatWindow />
    </Container>
  );
};

export default ChatPage;
