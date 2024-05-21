import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatWindow = ({ isVoiceEnabled }) => {
  const [messages, setMessages] = useState([]);
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
    if (inputElem.current) {
      inputElem.current.focus();
    }
    let userName = localStorage.getItem("userName");

    try {
      const response = await fetch("http://127.0.0.1:5000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ userMessage: message }),
      });

      if (!response.ok) {
        throw new Error("네트워크 응답이 정상적이지 않습니다");
      }

      const data = await response.json();

      speak(data.text);
      addMessage(data.text, false); // API로부터 받은 메시지 추가
    } catch (error) {
      console.error("GPT 응답을 가져오는 중 오류 발생:", error);
      addMessage("응답을 가져오지 못했습니다.", false); // 오류 메시지 추가
    }
  };

  return (
    <div className="chat-window">
      <video
        autoPlay
        loop
        muted
        width="100%"
        className="chat-character"
        poster="/spinnerImg.png"
      >
        <source src="/video/daara.mp4" type="video/mp4" />
      </video>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSubmit={handleSubmit} inputRef={inputElem} />
    </div>
  );
};

export default ChatWindow;
