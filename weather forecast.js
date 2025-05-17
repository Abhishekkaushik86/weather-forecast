const apiKey = '613ff8b2979403ddf45e5f9a9a040601';

async function getWeather() {
  const city = document.getElementById('city').value.trim();
  const weatherDiv = document.getElementById('weather');

  if (!city) {
    weatherDiv.innerHTML = '<p>Please enter a city name.</p>';
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    
    const data = await response.json();
    const { name, main, weather, wind } = data;

    weatherDiv.innerHTML = `
      <h2>${name}</h2>
      <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
      <p>🌡️ Temp: ${main.temp}°C</p>
      <p>💧 Humidity: ${main.humidity}%</p>
      <p>🌬️ Wind: ${wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
