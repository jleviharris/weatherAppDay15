import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="container top">
        <h1>Weather App</h1>
        <form action="" onSubmit="return false">
          <input
            type="text"
            className="search"
            placeholder="Search by city name"
          />
          <button type="submit" className="btn">
            Submit
          </button>
          <p className="error"></p>
        </form>
        <section>
          <div className="container">
            <div className="icon">
              <img src="" alt="" className="weather-icon" />
            </div>
            <div className="location">
              <div className="city">New York, US</div>
              <div className="date">Thursday, Dec 26 2020</div>
            </div>
            <div className="current">
              <div className="temp">
                Temp: 25 <span>°C</span>
              </div>
              <div className="weather">Weather: Sunny</div>
              <div className="temp-range">Temp Range: 10°C / 15°C</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
