import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { useSpeechRecognition } from "react-speech-kit";
import styled from "styled-components";

const Button = styled.button`
  margin-right: 5px;
`;

const Input = styled.input`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const ChatInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      console.log(result);
      setValue(result);
    },
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [value]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) {
      inputRef.current.focus();
      return;
    }
    onSubmit(value);
    setValue("");
  };

  const toggleListen = () => {
    if (listening) {
      stop();
    } else {
      listen();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat-input">
      {!isMobile && (
        <Button onClick={toggleListen}>
          <FaMicrophone size={35} color={listening ? "red" : "black"} />
        </Button>
      )}
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="질문을 입력해주세요."
      />

      <Button type="submit">
        <IoSend size={35} color="black" />
      </Button>
    </form>
  );
};

export default ChatInput;
