async function apiWeather() {
  let url;

  const pathName = window.location.pathname;
  if (
    pathName === "/city/surabaya/" ||
    pathName === "/city/surabaya" ||
    pathName === "/" ||
    pathName === "/gallery" ||
    pathName === "/gallery/"
  ) {
    url = "https://cuaca-gempa-rest-api.vercel.app/weather/jawa-timur/surabaya";
  } else if (pathName === "/city/malang/" || pathName === "/city/malang") {
    url =
      "https://cuaca-gempa-rest-api.vercel.app/weather/jawa-timur/kabupaten-malang";
  } else if (pathName === "/city/pacitan/" || pathName === "/city/pacitan") {
    url = "https://cuaca-gempa-rest-api.vercel.app/weather/jawa-timur/pacitan";
  } else if (
    pathName === "/city/probolinggo/" ||
    pathName === "/city/probolinggo"
  ) {
    url =
      "https://cuaca-gempa-rest-api.vercel.app/weather/jawa-timur/kabupaten-probolinggo";
  } else if (pathName === "/city/kediri/" || pathName === "/city/kediri") {
    url =
      "https://cuaca-gempa-rest-api.vercel.app/weather/jawa-timur/kabupaten-kediri";
  }

  const res = await fetch(url);
  const data = await res.json();
  const params = data.data.params;

  const currentTimeFormatted = getCurrentTimeFormatted();
  const currentHour = getCurrentHour();
  const matchingWeather = [];

  params.forEach((param) => {
    param.times.forEach((item) => {
      if (currentHour == 00 || currentHour == 06) {
        if (parseInt(item.datetime) === parseInt(currentTimeFormatted)) {
          matchingWeather.push(item);
        }
      }
      if (currentHour == 12 || currentHour == 18) {
        if (parseInt(item.datetime) === parseInt(currentTimeFormatted)) {
          if (parseInt(item.h) === parseInt(currentHour)) {
            matchingWeather.push(item);
          }
        }
      }
    });
  });

  const weather = document.getElementById("weather");
  const weatherHeader = document.getElementById("weather-header");

  weather.innerHTML = " ";

  if (matchingWeather.length > 0) {
    weather.innerHTML = `
        <h2 class="text-xl font-bold">${data.data.description}</h2>
        <div class="flex gap-4">
            ${matchingWeather
              .map(
                (item) => `
                ${item.celcius ? `<p class="text-lg">${item.celcius}</p>` : ""}
                ${
                  item.name
                    ? `<p class="text-lg">${translateWeather(item.name)}</p>`
                    : ""
                }
                `
              )
              .join("")}
          </div>
          <p>The weather is updated every 6 hours.</p>
    `;
  } else {
    weather.innerHTML =
      "<p>Weather information is not available at the moment.</p>";
  }

  if (matchingWeather.length > 0) {
    weatherHeader.innerHTML = `
          <div class="flex items-center md:text-sm lg:text-base">
            <h2 class="text-2xl mb-2">Weather in <span class="font-bold">${
              data.data.description
            }</span>
            </h2>
            <div class="md:w-[60%] lg:w-[75%] h-[1px] bg-mixed100 dark:bg-gray-50"></div>
          </div>
          <div class="grid md:grid-cols-4">
            <p>Humidity</p>
            <p>Tempereature</p>
            <p>Weather</p>
            <p>Wind</p>
          </div>
          <div class="grid md:grid-cols-4">
            ${matchingWeather
              .map(
                (item) => `
                ${item.ms ? `<p>${item.ms}</p>` : ""}
                ${item.celcius ? `<p>${item.celcius}</p>` : ""}
                ${item.name ? `<p>${translateWeather(item.name)}</p>` : ""}
                ${item.value ? `<p>${item.value}</p>` : ""}
                `
              )
              .join("")}
          </div>
    `;
  } else {
    weather.innerHTML =
      "<p>Weather information is not available at the moment.</p>";
  }
}

function getCurrentTimeFormatted() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = currentDate.getDate();
  day = day < 10 ? "0" + day : day;
  let hours = currentDate.getHours();
  hours = Math.floor(hours / 6) * 6;
  hours = hours < 10 ? "0" + hours : hours;
  return `${year}${month}${day}${hours}00`;
}

function getCurrentHour() {
  const currentDate = new Date();
  let hours = Math.floor(currentDate.getHours() / 6) * 6;

  return hours < 10 ? "0" + hours : hours;
}

function translateWeather(weatherInIndonesian) {
  const weatherTranslations = {
    Cerah: "Clear Skies",
    "Cerah Berawan": "Partly Cloudy",
    Berawan: "Mostly Cloudy",
    "Berawan Tebal": "Overcast",
    "Udara Kabut": "Haze",
    Asap: "Smoke",
    Kabut: "Fog",
    "Hujan Ringan": "Light Rain",
    "Hujan Sedang": "Rain",
    "Hujan Lebat": "Heavy Rain",
    "Hujan Lokal": "Isolated Shower",
    "Hujan Petir": "Severe Thunderstorm",
  };

  return weatherTranslations[weatherInIndonesian] || weatherInIndonesian;
}

apiWeather();
