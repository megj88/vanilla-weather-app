function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(
    response.data.daily[0].temperature.day
  );
  cityElement.innerHTML = response.data.city;
  description.innerHTML = response.data.daily[0].condition.description;
  humidityElement.innerHTML = response.data.daily[0].temperature.humidity;
  windElement.innerHTML = Math.round(response.data.daily[0].wind.speed);
}

let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=o7ea0936527a0d6te1ab2cfbbc475e37&units=metric`;
axios.get(apiUrl).then(displayTemperature);
