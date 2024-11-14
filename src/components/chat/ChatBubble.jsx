import React from "react";

const ChatBubble = ({ message, type }) => {
  const bubbleClass =
    type === "primary"
      ? "bg-yellow-100 self-end"
      : "bg-lightPrimaryColor self-start";

  return (
    <div className={`${bubbleClass} w-[10rem] shadow-md p-4 rounded-md`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatBubble;
