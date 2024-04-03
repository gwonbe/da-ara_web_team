import { useState } from "react";

const ChatInput = ({ onsubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onsubmit(inputValue);
    setInputValue("");
  };
  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="질문을 입력해주세요."
      />
      <button type="submit">보내기</button>
    </form>
  );
};

export default ChatInput;
