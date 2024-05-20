const ChatMessage = ({ message, isUser }) => {
  const messageStyle = {
    marginBottom: isUser ? "16px" : "0",
  };

  // // 문자열에서 줄바꿈을 처리하는 함수
  const formatMessage = (msg) => {
    console.log(typeof msg);
    const parts = msg.split('<br>');
    return parts.map((part, index) => (
      <span key={index}>
        {part}
        <br/>
      </span>
    ));
  };
  
  return (
    <div className={`chat-message ${isUser ? "user-message" : "bot-message"}`} style={messageStyle}>
      <p>{formatMessage(message)}</p>
    </div>
  );

};

export default ChatMessage;