import { useState, useRef, useEffect } from "react";
import { Camera, Search, BrainCircuit, ArrowUp, ImageIcon, Edit, Newspaper, User, LayoutGrid } from "lucide-react";
import './QueryComponent.css';

export default function QueryComponent() {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isFirstQuery, setIsFirstQuery] = useState(true);
  const contentAreaRef = useRef(null);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (query.trim()) {
      setChatHistory([
        ...chatHistory,
        { type: 'query', text: query },
        { type: 'response', text: `This is a sample response to: ${query}` }
      ]);

      setIsFirstQuery(false);
      setQuery('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (contentAreaRef.current) {
      contentAreaRef.current.scrollTop = contentAreaRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="app-container">
      <div className="content-area" ref={contentAreaRef}>
        {isFirstQuery && (
          <div className="greeting">
            <h1>Good afternoon, Developer.</h1>
            <p>How can I help you today?</p>
          </div>
        )}

        {chatHistory.length > 0 && (
          <div className="chat-container">
            {chatHistory.map((item, index) => (
              <div key={index} className={`chat-bubble ${item.type}`}>
                <p>{item.type === 'query' ? '🙋 ' : '🤖 '}{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`input-section ${isFirstQuery ? 'centered' : 'bottom'}`}>
        <div className="input-container">
          <div className="input-field">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What do you want to know?"
            />
            <button className="send-button" onClick={handleSubmit}>
              <ArrowUp size={20} />
            </button>
          </div>

          <div className="feature-buttons">
            <button className="feature-button">
              <ImageIcon size={18} />
              <span>Create Images</span>
            </button>

            <button className="feature-button">
              <Edit size={18} />
              <span>Edit Image</span>
            </button>

            <button className="feature-button">
              <Newspaper size={18} />
              <span>Latest News</span>
            </button>

            <button className="feature-button">
              <LayoutGrid size={18} />
              <span>Workspaces</span>
              <span className="new-tag">New</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
