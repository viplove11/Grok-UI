import React, { useState, useRef, useEffect } from 'react'
import './QueryComponent.css'

const QueryComponent = ({ onSendMessage }) => {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  
  // Focus input field on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSendMessage(query.trim())
      setQuery('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e)
    }
  }

  return (
    <div className="query-component">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What do you want to know?"
            className="query-input"
          />
          <button 
            type="submit" 
            className="send-button"
            disabled={!query.trim()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path 
                fill="currentColor" 
                d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
              />
            </svg>
          </button>
        </div>

         <div className="feature-buttons">
                    <button className="feature-btn">
                     
                      Create Images
                    </button>
                    <button className="feature-btn">
                      {/* <span className="feature-icon">✏️</span> */}
                      Edit Image
                    </button>
                    <button className="feature-btn">
                      {/* <span className="feature-icon">📰</span> */}
                      Latest News
                    </button>
                    <button className="feature-btn">
                      {/* <span className="feature-icon">👤</span> */}
                      Personas
                    </button>
                    <button className="feature-btn">
                      {/* <span className="feature-icon">🔧</span> */}
                      Workspaces
                      <span className="new-tag">New</span>
                    </button>
                  </div>
        
        {/* <div className="input-controls">
          <div className="left-controls">
            <button type="button" className="control-btn">
              <span role="img" aria-label="attachment">📎</span>
            </button>
            <button type="button" className="control-btn">
              <span>DeepSearch</span>
              <span>▼</span>
            </button>
            <button type="button" className="control-btn">
              <span>Think</span>
            </button>
          </div>
          
          <div className="right-controls">
            <div className="model-selector">
              <span>Grok 3</span>
              <span>▼</span>
            </div>
            <button type="button" className="control-btn">
              <span>↑</span>
            </button>
          </div>
        </div> */}
      </form>
    </div>
  )
}

export default QueryComponent