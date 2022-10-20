import "./App.css";
import { useState } from "react";

function App() {
  const [todaysDate, setTodaysDate] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [tempRange, setTempRange] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    getData();
  };

  const api = {
    key: "751c141bb0da187bc829bfd596da5338",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  function getData() {
    fetch(`${api.base}weather?q=${search}&units=imperial&appid=${api.key}`)
      .then((response) => {
        return response.json();
      })
      .then(displayData)
      .catch((error) => {
        console.log(error);
      });
  }
  function getInput(event) {
    event.preventDefault();
    if (event.type == "click") {
      getData(search);
      console.log(search);
    }
  }

  function displayData(response) {
    console.log("yo");
    if (response.cod === "404") {
      setError("Please enter a valid city");
      setSearch("");
    } else {
      setError("");
      setCity(`${response.name}, ${response.sys.country}`);
      const today = new Date();
      setTodaysDate(dateFunction(today));
      setTemp(`Temp: ${Math.round(response.main.temp)} °C`);
      setWeather(`Weather: ${response.weather[0].main}`);
      setTempRange(
        `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(
          response.main.temp_max
        )}°C`
      );

      const weatherIcon = document.querySelector(".weather-icon");
      const iconURL = "http://openweathermap.org/img/w/";
      weatherIcon.src = iconURL + response.weather[0].icon + ".png";
      setSearch("");
    }
  }

  function dateFunction(d) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  }

  return (
    <div className="main-container">
      <div className="container top">
        <h1>Weather App</h1>
        <form onSubmit={handleClick}>
          <input
            value={search}
            type="text"
            className="search"
            placeholder="Search by city name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="btn"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Submit
          </button>
          {error.length > 0 && <p className="error">{error}</p>}
        </form>
        <section>
          <div className="container">
            <div className="icon">
              <img src="" alt="" className="weather-icon" />
            </div>
            <div className="location">
              <div className="city">{city}</div>
              <div className="date">{todaysDate}</div>
            </div>
            <div className="current">
              <div className="temp">{temp}</div>
              <div className="weather">{weather}</div>
              <div className="temp-range">{tempRange}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
