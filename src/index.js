function updateWeather(response) {
  let temperature = Math.round(response.data.temperature.current);

  let temperatureElement = document.querySelector(
    "#weather-current-temperature",
  );
  let cityElement = document.querySelector("#weather-city");
  let iconElement = document.querySelector("#weather-icon");
  temperatureElement.innerHTML = temperature;
  cityElement.innerHTML = response.data.city;

  let description = response.data.condition.description;

  if (description.includes("rain")) {
    iconElement.innerHTML = "🌧️";
  } else if (description.includes("cloud")) {
    iconElement.innerHTML = "☁️";
  } else if (description.includes("snow")) {
    iconElement.innerHTML = "❄️";
  } else if (description.includes("clear")) {
    iconElement.innerHTML = "☀️";
  } else {
    iconElement.innerHTML = "🌤️";
  }
}

function searchCity(cityName) {
  let apiKey = "9a9b8262d5b0t51o000cfc108a873741";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${encodeURIComponent(
    cityName,
  )}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateWeather);
}

function searchSubmit(event) {
  event.preventDefault();

  let searchInputCity = document.querySelector("#city");
  searchCity(searchInputCity.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
