import React, { useState } from 'react';
import { analyzeHeader } from '../services/api';

function UploadForm() {
  const [header, setHeader] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await analyzeHeader(header);
    setResult(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={header} onChange={(e) => setHeader(e.target.value)} placeholder="Paste email header here" rows="10" cols="60" />
        <br />
        <button type="submit">Analyze</button>
      </form>
      {result && (
        <div>
          <h3>Results:</h3>
          <p><strong>ESP:</strong> {result.esp}</p>
          <p><strong>Received Chain:</strong></p>
          <ul>
            {result.received_chain.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UploadForm;
