import { useState, useEffect } from "react";
import ChatNav from "../../components/dashboard/ChatNav";
import ChatComponent from "../../components/chat/ChatComponent";

const Chat = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showChatComponent, setShowChatComponent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setShowChatComponent(true);
  };

  const handleBackToChatNav = () => {
    setShowChatComponent(false);
    setSelectedMessage(null);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 text-primaryColor lg:pr-8">
      {isSmallViewport ? (
        showChatComponent ? (
          <div className="md:mt-20 w-full px-4 md:px-0 bg-secondaryColor text-primaryColor">
            <button onClick={handleBackToChatNav} className="mb-4">
              Back
            </button>
            <ChatComponent selectedMessage={selectedMessage} />
          </div>
        ) : (
          <div className="w-full">
            <ChatNav onSelectMessage={handleSelectMessage} />
          </div>
        )
      ) : (
        <>
          <ChatNav onSelectMessage={handleSelectMessage} />
          <div className="mt-10 md:mt-20 w-full px-4 md:px-0 bg-secondaryColor text-primaryColor">
            {selectedMessage ? (
              <ChatComponent selectedMessage={selectedMessage} />
            ) : (
              <p>Select a chat to start messaging</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
