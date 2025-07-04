import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import { getCachedWeather, setCachedWeather } from './weatherCache.js';

dotenv.config();
const app = express();
const PORT = 3000;
const API_KEY = process.env.WEATHER_API_KEY;

app.use(cors());

app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City is required' });

  const cached = getCachedWeather(city);
  if (cached) {
    return res.json({ data: cached, source: 'cache' });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    const data = response.data;
    setCachedWeather(city, data);
    res.json({ data, source: 'api' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
