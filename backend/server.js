const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    user: 'eburns009'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'eburns009 Astrology API Server',
    version: '1.0.0'
  });
});

// Sample chart endpoint
app.get('/api/chart/sample', (req, res) => {
  res.json({
    message: "Sample chart working for eburns009",
    success: true
  });
});

// Location search endpoint
app.get('/api/locations/search', (req, res) => {
  const { q } = req.query;
  const results = [
    { name: 'New York, NY, USA', latitude: 40.7128, longitude: -74.0060 },
    { name: 'London, UK', latitude: 51.5074, longitude: -0.1278 }
  ].filter(city => city.name.toLowerCase().includes((q || '').toLowerCase()));
  
  res.json({ query: q, results, count: results.length });
});

app.listen(PORT, () => {
  console.log(`🚀 eburns009 server running on port ${PORT}`);
});
