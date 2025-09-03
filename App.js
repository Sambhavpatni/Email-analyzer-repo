import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const analyzeEmail = async () => {
    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Email Analyzer</h1>
      <textarea
        rows="6"
        cols="60"
        placeholder="Paste your email content here..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <button onClick={analyzeEmail}>Analyze</button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h2>Analysis Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
