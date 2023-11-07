import React, { useState, useEffect, useRef } from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import './chatInterface-style.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const chatBoxRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSendMessage =() => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, user: 'user' }]);
      setInputText('');
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Container>
      <div className="chat-container">
        <div className="chat-box" ref={chatBoxRef}>
          <ListGroup variant="flush">
            {messages.map((message, index) => (
                <ListGroup.Item
                    key={index}
                    className={message.user === 'bot' ? 'bot-message' : 'user-message'}
                >
                  {message.text}
                </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
      <Form className="input-form">
        <div className="input-container">
          <Form.Control
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
          />
          <Button variant="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ChatInterface;