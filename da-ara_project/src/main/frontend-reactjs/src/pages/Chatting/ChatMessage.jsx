const ChatMessage = ({ message, isUser }) => {
  const messageStyle = {
    marginBottom: isUser ? "16px" : "0",
  };

  return (
    <div className={`chat-message ${isUser ? "user-message" : "bot-message"}`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
