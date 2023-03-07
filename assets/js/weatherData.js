const weatherAPI =
  "https://api.open-meteo.com/v1/forecast?latitude=57.05&longitude=9.92&hourly=temperature_2m,precipitation_probability,precipitation,windspeed_80m,winddirection_80m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max&current_weather=true&timezone=auto";
const div = document.getElementById("testDiv");

console.log(div);

let myFetch = fetch(weatherAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log(data);
    displayWeather(data);
  })
  .catch((error) => {
    console.log(error);
  });

function displayWeather(weatherData) {
  const { timezone } = weatherData;
  // console.log(timezone);
  const { time } = weatherData.current_weather;
  // console.log(time);
  const { temperature } = weatherData.current_weather;
  // console.log(temperature);
  const { windspeed } = weatherData.current_weather;
  //console.log(windspeed);
  const { winddirection } = weatherData.current_weather;
  //console.log(winddirection);
  // console.log(timezone, time, temperature, windspeed, winddirection);
  document.getElementById("city").innerText = timezone;
  document.getElementById("dayAndTime").innerText = "Dato & tid: " + time;
  document.getElementById("wind").innerText =
    "Vindhastighed: " + windspeed + " og retning: " + winddirection;
  document.getElementById("temperature").innerText =
    "Temperatur: " + temperature;
}
