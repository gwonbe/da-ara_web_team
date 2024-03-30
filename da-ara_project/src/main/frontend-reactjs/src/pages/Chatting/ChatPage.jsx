import Chatting from "./Chatting";
import Header from "../../components/Header";
import styled from "styled-components";

const Container = styled.div`
  background: #f5f5ff;
  min-height: calc(var(--vh) * 100);
  width: 100%;
`;

const ChatPage = () => {
  return (
    <Container>
      <Header />
      <Chatting />
    </Container>
  );
};

export default ChatPage;
