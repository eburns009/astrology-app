const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || q.length < 2) {
      return res.status(400).json({
        error: 'Query must be at least 2 characters'
      });
    }
    
    const sampleLocations = [
      { name: 'New York, NY, USA', latitude: 40.7128, longitude: -74.0060, country: 'USA' },
      { name: 'London, UK', latitude: 51.5074, longitude: -0.1278, country: 'UK' },
      { name: 'Paris, France', latitude: 48.8566, longitude: 2.3522, country: 'France' },
      { name: 'Tokyo, Japan', latitude: 35.6762, longitude: 139.6503, country: 'Japan' },
      { name: 'Sydney, Australia', latitude: -33.8688, longitude: 151.2093, country: 'Australia' }
    ];
    
    const results = sampleLocations.filter(city => 
      city.name.toLowerCase().includes(q.toLowerCase())
    );
    
    res.json({ 
      query: q, 
      results, 
      count: results.length,
      user: "eburns009"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
