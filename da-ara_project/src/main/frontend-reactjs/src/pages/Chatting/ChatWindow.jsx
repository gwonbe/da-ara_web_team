import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatWindow = ({ isVoiceEnabled }) => {
  const [messages, setMessages] = useState([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 관리하는 변수
  const inputElem = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (message, isUser) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser }]);
  };

  const speak = (text) => {
    if (isVoiceEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ko-KR";
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const handleSubmit = async (message) => {
    addMessage(message, true); // 사용자 메시지 추가
    setIsLoading(true); // 로딩 시작
    if (inputElem.current) {
      inputElem.current.focus();
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ userMessage: message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      speak(data.text);
      addMessage(data.text, false); // API 응답 메시지 추가
      setIsVideoPlaying(true); // 성공적인 POST 요청 후 비디오 재생 시작
    } catch (error) {
      console.error("Error while fetching GPT response:", error);
      addMessage("Failed to fetch response.", false); // 오류 메시지 추가
      setIsVideoPlaying(false); // POST 실패 시 스피너 이미지 표시
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false); // 비디오 종료 시 상태 업데이트
  };

  return (
    <div className="chat-window">
      {isVideoPlaying ? (
        <video
          autoPlay
          muted
          width="100%"
          className="chat-character"
          poster="/spinnerImg.png"
          onEnded={handleVideoEnd} // 비디오 종료 이벤트 처리
        >
          <source src="/video/daara.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/spinnerImg.png"
          alt="Loading..."
          className="chat-characterimg"
        />
      )}

      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
        {isLoading && (
          <div className="chat-message bot-message">답변 로딩 중...</div>
        )}{" "}
        {/* 로딩 메시지 표시 */}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSubmit={handleSubmit} inputRef={inputElem} />
    </div>
  );
};

export default ChatWindow;
