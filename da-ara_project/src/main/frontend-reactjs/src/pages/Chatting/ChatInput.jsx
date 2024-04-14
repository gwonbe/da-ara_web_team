import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { useSpeechRecognition } from "react-speech-kit";

const ChatInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="chat-input">
      <button onMouseDown={listen} onMouseUp={stop}>
        <FaMicrophone size={35} />
      </button>
      {listening && <div>듣는중입니다🎧</div>}
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="질문을 입력해주세요."
      />

      <button type="submit">
        <IoSend size={35} color="black" />
      </button>
    </form>
  );
};

export default ChatInput;
