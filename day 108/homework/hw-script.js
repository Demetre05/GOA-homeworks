const div = document.querySelector("div");
const city = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", e => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=f416de9fa1be955557569aabf2188792`)
    .then(request => request.json())
    .then(data => {
        div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather-icon">
        <h3>Temperature - ${Math.round(data.main.temp - 273.15)}°C</h3>
        <h3>Weather - ${data.weather[0].main}</h3>
        <h3>Humidity - ${data.main.humidity}</h3>
        <h3>Wind speed - ${data.wind.speed} km/h</h3>`
    }).catch(() => div.innerHTML = "<p>No results found</p>")
});