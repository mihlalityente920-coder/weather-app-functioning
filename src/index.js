let apiKey = "a420aff14af023a20a1023c3941`";
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
function displayWeather(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind").innerHTML = math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#current-date").innerHTML = formatDate(
    new Date(response.data.dt * 1000)
  );
  let iconCode = response.data.weather[0];
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src", data.condition.icon_url);
  document
    .querySelector("#icon")
    .setAttribute("alt", response.data.weather[0].description);
}
function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function handleSearch(event) {
  eventDefault();
  letcityInput = document.querySelector("#search-input").value;
  searchCity(cityInput);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("#submit", handleSearch);
searchCity("Cape Town");
