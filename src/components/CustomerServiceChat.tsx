// src/components/CustomerServiceChat.tsx

import React, { useState } from 'react';

const CustomerServiceChat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = (message: string) => {
    // Here you would typically send the message to your backend
    // and get a response. We're simulating it with a setTimeout
    setMessages([...messages, `You: ${message}`]);
    setTimeout(() => {
      setMessages([...messages, `You: ${message}`, `Customer Service: Thanks for your message!`]);
    }, 1000);
  }

  return (
    <div>
      {messages.map((message, index) => <p key={index}>{message}</p>)}
      <input type='text' onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(e.currentTarget.value)}} />
    </div>
  );
}

export default CustomerServiceChat;
