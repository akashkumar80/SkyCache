import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes TTL

export function getCachedWeather(city) {
  return cache.get(city.toLowerCase());
}

export function setCachedWeather(city, data) {
  cache.set(city.toLowerCase(), data);
}
