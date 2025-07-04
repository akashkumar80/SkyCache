async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const resultDiv = document.getElementById('weatherResult');
  if (!city) {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    resultDiv.innerHTML = "<p>Loading...</p>";
    const res = await fetch(`http://localhost:3000/api/weather?city=${encodeURIComponent(city)}`);
    const json = await res.json();

    if (json.error) {
      resultDiv.innerHTML = `<p>${json.error}</p>`;
      return;
    }

    const data = json.data;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="${icon}" alt="${data.weather[0].description}" />
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡️ Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
      ${json.source === 'cache' ? "<p style='color:orange;'>⚠️ Cached Data</p>" : ""}
    `;
  } catch (err) {
    resultDiv.innerHTML = "<p>Server error. Try again later.</p>";
  }
}
