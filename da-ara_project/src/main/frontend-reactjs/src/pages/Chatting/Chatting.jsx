import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 360px;
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  overflow-y: hidden;
  min-height: calc(100% - 50px);
`;

const SearchBox = styled.div`
  z-index: 10;
  position: absolute;
  height: 55px;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

const InputBox = styled.input`
  position: relative;
  border-radius: 50px;
  width: calc(100% - 65px);
  border: none;
  height: 35px;
  background-color: #fff;
  color: #000;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

const Chatting = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const addMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const handleSendMessage = async () => {
    const message = userInput.trim();
    if (message.length === 0) return;

    addMessage("user", message); // 사용자 메시지 추가
    setUserInput(""); // 입력 필드 초기화
    setLoading(true); // 로딩 상태 활성화

    try {
      // 사용자 정의 API 요청
      const response = await fetch("http://127.0.0.1:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: message }), // 예시로 메시지 내용을 전송합니다.
      });

      const data = await response.json();
      console.log(data); // 콘솔에 API 응답 출력
      addMessage("bot", data.response); // 사용자 정의 API에서 받은 응답을 채팅에 추가
    } catch (error) {
      console.error("오류 발생!", error);
      addMessage("bot", "오류가 발생했습니다.");
    } finally {
      setLoading(false); // 로딩 상태 비활성화
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Container id="Chatbot">
      <h1>인공지능 챗봇</h1>
      <div className="chatDiv">
        {loading && (
          <span className="messageWait">답변을 기다리고 있습니다</span>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {`${msg.sender === "user" ? "나" : "챗봇"} : ${msg.message}`}
          </div>
        ))}
      </div>
      <SearchBox className="inputDiv">
        <InputBox
          type="text"
          placeholder="메시지를 입력하세요"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage}>전송</button>
      </SearchBox>
    </Container>
  );
};

export default Chatting;