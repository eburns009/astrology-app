import { useState } from 'react';

export default function Home() {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const apiUrl = 'https://eburns009-astrology-backend.onrender.com';
      const response = await fetch(`${apiUrl}/health`);
      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      setApiResponse({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🌟 eburns009's Astrology App is LIVE!</h1>
      <p>Your backend is deployed and working!</p>
      
      <button 
        onClick={testAPI}
        disabled={loading}
        style={{
          padding: '12px 24px',
          backgroundColor: '#4F46E5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Testing...' : 'Test Live API'}
      </button>

      {apiResponse && (
        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem', 
          backgroundColor: '#f5f5f5',
          borderRadius: '5px',
          fontFamily: 'monospace'
        }}>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}

      <p style={{ marginTop: '2rem', color: '#666' }}>
        Backend URL: https://eburns009-astrology-backend.onrender.com
      </p>
    </div>
  );
}
