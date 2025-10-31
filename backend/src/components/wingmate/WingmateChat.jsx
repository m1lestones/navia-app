import React, { useState, useRef, useEffect } from 'react';
import './WingmateChat.css';

const WingmateChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! I'm Wingmate, your humble travel companion. How can I help make your journey amazing today?",
      sender: 'wingmate',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:3000/api/wingmate/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          country: selectedCountry,
          language: selectedLanguage
        })
      });

      const data = await response.json();

      const wingmateMessage = {
        id: Date.now() + 1,
        text: data.message,
        sender: 'wingmate',
        timestamp: new Date(),
        personality: data.personality
      };

      setMessages(prev => [...prev, wingmateMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now. Please try again!",
        sender: 'wingmate',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="wingmate-container">
      <div className="wingmate-header">
        <div className="wingmate-avatar">🧭</div>
        <div className="wingmate-title">
          <h3>Wingmate</h3>
          <p className="wingmate-status">
            <span className="status-dot"></span>
            Your Humble Travel Companion
          </p>
        </div>
      </div>

      <div className="wingmate-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender === 'user' ? 'user-message' : 'wingmate-message'}`}
          >
            {msg.sender === 'wingmate' && (
              <div className="message-avatar">🧭</div>
            )}
            <div className="message-content">
              <div className="message-text">{msg.text}</div>
              <div className="message-time">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message wingmate-message">
            <div className="message-avatar">🧭</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="wingmate-input-area">
        <div className="personality-selector">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="personality-dropdown"
          >
            <option value="usa">🇺🇸 American</option>
            <option value="dominican-republic">🇩🇴 Dominican</option>
            <option value="mexico">🇲🇽 Mexican</option>
            <option value="japan">🇯🇵 Japanese</option>
            <option value="uk">🇬🇧 British</option>
            <option value="france">🇫🇷 French</option>
            <option value="spain">🇪🇸 Spanish</option>
            <option value="italy">🇮🇹 Italian</option>
            <option value="brazil">��🇷 Brazilian</option>
            <option value="india">🇮🇳 Indian</option>
          </select>
        </div>
        <div className="input-container">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Wingmate anything about your journey..."
            rows="1"
            className="message-input"
          />
          <button
            onClick={sendMessage}
            disabled={!inputText.trim() || isTyping}
            className="send-button"
          >
            ✈️
          </button>
        </div>
      </div>
    </div>
  );
};

export default WingmateChat;
