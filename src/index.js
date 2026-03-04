function searchSubmit(event) {
  event.preventDefault();
  let searchInputCity = document.querySelector("#city");
  let cityElement = document.querySelector("#weather-city");
  cityElement.innerHTML = searchInputCity.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
