import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then(res => res.json())
      .then (data => setResponse(data.message));
  };

  return (
    <div className="app">
      <form className='form' onSubmit={handleSubmit}>
        <textarea 
          className='content'
          value={message}
          onChange={e => setMessage(e.target.value)}
          ></textarea>
          <button className='btn' type='submit'>Submit</button>
      </form>
      <div className='chat-response'>{response}</div>
    </div>
  )
};

export default App;