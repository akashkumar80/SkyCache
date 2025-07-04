# 🌦️ SkyCache

**SkyCache** is a smart weather forecast application that efficiently handles API rate limits by caching weather data on the backend. Built using **Node.js (Express)** and a **Vanilla JavaScript frontend**, it allows users to search for city-specific weather conditions while gracefully falling back to cached data when needed.

---

## 🚀 Live Demo

Coming soon...

---

## 📌 Features

- 🔍 Search weather by city name
- 🔁 **Backend caching** (10-minute cache per city)
- 🚫 Handles API failures or rate limits by showing cached data
- 🌐 Simple, responsive frontend
- 🔐 API key hidden in `.env` file (secure usage)

---

## 🛠️ Tech Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| Frontend    | HTML, CSS, Vanilla JavaScript |
| Backend     | Node.js, Express, Axios  |
| Caching     | node-cache               |
| API         | OpenWeatherMap API       |

---

## 📂 Project Structure

skycache/
├── backend/ # Node.js + Express server
│ ├── index.js # Main server file
│ ├── weatherCache.js # Cache logic
│ ├── .env # API key (not committed)
│ └── package.json
├── frontend/ # Static HTML/CSS/JS frontend
│ ├── index.html
│ ├── style.css
│ └── script.js
├── .gitignore
├── README.md



## 🔧 Setup Instructions

### 1️⃣ Clone the repository

    ```bash
    git clone https://github.com/YOUR_USERNAME/skycache.git
    cd skycache
    ```

### 2️⃣ Setup the backend
    ```bash
    cd backend
    npm install
    ```


Create a .env file inside backend/:

    ```bash
    WEATHER_API_KEY=your_openweathermap_api_key_here
    ```

Start the backend:

    ```bash
    npm start
    ```

