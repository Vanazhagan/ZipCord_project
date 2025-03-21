import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

// Pre-built conversation
const preBuiltConversation = [
  {
    type: 'user',
    content: 'How to invest in Share Market?'
  },
  {
    type: 'ai',
    content: `Learn the Basics – Understand stocks, indices (Nifty, Sensex), and market trends.
Open a Demat & Trading Account – Use brokers like Zerodha, Upstox, or Groww.
Research Stocks – Analyze companies, financials, and market performance.
Start with Small Investments – Invest what you can afford to lose.
Diversify Portfolio – Spread investments across different sectors to reduce risk.
Choose Investment Style – Long-term (invest & hold) or short-term (trading).
Monitor & Learn – Track stock performance, follow market news, and stay updated.
Avoid Emotional Decisions – Stick to strategy, don't panic in market fluctuations.
Reinvest & Grow – Use profits to buy more stocks and build wealth over time.
Consider Mutual Funds & ETFs – If unsure, invest in professionally managed funds.`
  }
];

const ChatInterface = () => {
  const [messages, setMessages] = useState(preBuiltConversation);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    setMessages(prev => [...prev, { type: 'user', content: inputValue }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: "I'm a demo AI assistant. This is a simulated response to demonstrate the chat interface. In a real implementation, this would connect to an AI backend for personalized financial advice." 
      }]);
    }, 1000);
    
    setInputValue('');
  };

  return (
    <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[70vh] border border-gray-200">
      <div className="bg-green-600 text-white px-6 py-4 flex items-center">
        <div className="w-3 h-3 bg-green-300 rounded-full mr-2 animate-pulse"></div>
        <h3 className="font-medium">Zipcord AI Assistant</h3>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.type === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg px-4 py-3 ${
                message.type === 'user' 
                  ? 'bg-green-600 text-white rounded-tr-none shadow-md' 
                  : 'bg-white text-gray-800 rounded-tl-none shadow-md border border-gray-200'
              }`}
            >
              <p className="whitespace-pre-line">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about financial advice..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button 
            type="submit"
            className="bg-green-600 text-white rounded-r-lg px-4 py-2 hover:bg-green-700 transition-colors duration-200 flex items-center"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;