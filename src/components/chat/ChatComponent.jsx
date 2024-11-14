import React, { useState } from "react";
import ChatBubble from "./ChatBubble";

const ChatComponent = ({ selectedMessage }) => {
  const [messages, setMessages] = useState([
    { message: selectedMessage.text, type: "primary" },
    // You can initialize more messages if needed
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { message: inputValue, type: "primary" }]);
      setInputValue("");
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center h-20 p-4 border-b border-primaryColor">
        <div className="flex gap-3 items-center">
          <img
            src={selectedMessage.img}
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <h3 className="font-semibold">{selectedMessage.name}</h3>
        </div>
        <div className="flex gap-3">
          <img src="/search.svg" alt="" />
          <p>dot</p>
        </div>
      </nav>
      <div className="p-4 flex flex-col gap-4 h-[calc(100vh-80px)] overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.message} type={msg.type} />
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-primaryColor flex items-center"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border rounded-md"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-primaryColor text-white rounded-md"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ChatComponent;
