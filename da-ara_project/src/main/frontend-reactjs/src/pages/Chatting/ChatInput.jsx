import { useState } from "react";
import { IoSend } from "react-icons/io5";

const ChatInput = ({ onsubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onsubmit(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="chat-input">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="질문을 입력해주세요."
      />
      <button type="submit">
        <IoSend size={35} color="black" />
      </button>
    </form>
  );
};

export default ChatInput;
