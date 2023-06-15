window.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
  });
  
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    const apiKey = '9b16d749cc754995b0791026231506'; // Replace with your WeatherAPI API key
    const query = document.getElementById('query').value;
  
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`);
      const data = await response.json();
  
      const location = data.location.name;
      const temperature = data.current.temp_c;
      const description = data.current.condition.text;
      const humidity = data.current.humidity;
      const windSpeed = data.current.wind_kph;
      const windDirection = data.current.wind_dir;

  
      document.getElementById('location').textContent = location;
      document.getElementById('temperature').textContent = `${temperature}°C`;
      document.getElementById('description').textContent = description;
      document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
      document.getElementById('wind').textContent = `Wind: ${windSpeed} kph ${windDirection}`;
      document.getElementById('sunrise').textContent = `Sunrise: ${sunrise}`;
      document.getElementById('sunset').textContent = `Sunset: ${sunset}`;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  