import React, { useState } from 'react'
import QueryComponent from './Component/QueryComponent/QueryComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  const [messages, setMessages] = useState([])
  const [isInitialState, setIsInitialState] = useState(true)

  const handleSendMessage = (message) => {
    if (isInitialState) {
      setIsInitialState(false)
    }
    
    // Add user message
    const userMessage = {
      text: message,
      isUser: true,
      timestamp: new Date().toISOString()
    }
    
    setMessages(prevMessages => [...prevMessages, userMessage])
    
    // Simulate AI response (you would replace this with actual API call)
    setTimeout(() => {
      const aiResponse = {
        text: `Response to: ${message}`,
        isUser: false,
        timestamp: new Date().toISOString()
      }
      setMessages(prevMessages => [...prevMessages, aiResponse])
    }, 1000)
  }

  return (
    <div className={`main-app ${isInitialState ? 'initial-state' : 'chat-state'} container`}>
      {isInitialState ? (
        <div className="welcome-container">
          <h1 className="welcome-heading">Good afternoon, Gautam.</h1>
          <h2 className="welcome-subheading">How can I help you today?</h2>
          
          <div className="query-container welcome-query">
            <QueryComponent onSendMessage={handleSendMessage} />
          </div>
          
          <div className="feature-buttons">
            <button className="feature-btn">
              <span className="feature-icon">🖼️</span>
              Create Images
            </button>
            <button className="feature-btn">
              <span className="feature-icon">✏️</span>
              Edit Image
            </button>
            <button className="feature-btn">
              <span className="feature-icon">📰</span>
              Latest News
            </button>
            <button className="feature-btn">
              <span className="feature-icon">👤</span>
              Personas
            </button>
            <button className="feature-btn">
              <span className="feature-icon">🔧</span>
              Workspaces
              <span className="new-tag">New</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="chat-container">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.isUser ? 'user-message' : 'ai-message'}`}>
                <div className="message-content">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="query-container chat-query">
            <QueryComponent onSendMessage={handleSendMessage} />
          </div>
        </>
      )}
    </div>
  )
}

export default App