import React, { useState } from 'react';

const ChatBox = ({ role, userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages((prev) => [...prev, { sender: role, message: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="chat-box p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold mb-2">Chat</h3>
      <div className="messages-container h-64 overflow-y-auto border rounded-md p-2 bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === role ? 'text-right' : 'text-left'}`}>
            <span className="block text-sm text-gray-600">{msg.sender}:</span>
            <p className="bg-blue-200 inline-block p-2 rounded-md">{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
