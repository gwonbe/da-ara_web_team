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
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [messages]);

  const addMessage = (message, isUser) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser }]);
  };

  function speak(text) {
    if (isVoiceEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ko-KR";
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
    }
  }

  const handleSubmit = async (message) => {
    addMessage(message, true); // 사용자 메시지 추가
    if (inputElem.current) {
      inputElem.current.focus();
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage: message }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("네트워크 오류");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => {
          console.error("에러 발생:", error);
          throw error;
        });
      //
      const myJson = await response;
      speak(myJson["text"]);
      addMessage(myJson["text"], false); // API로부터 받은 메시지를 직접 채팅에 추가
    } catch (error) {
      console.error("Error fetching GPT response:", error);
      addMessage("Failed to fetch response.", false); // 에러 메시지를 채팅에 추가
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
        <source src="/video/defchar.mp4" type="video/mp4" />
      </video>

      <form action="saveChatRecord" method="post" style={{ width: "100%" }}>
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
      </form>

      <ChatInput onSubmit={handleSubmit} />
    </div>
  );
};

export default ChatWindow;
