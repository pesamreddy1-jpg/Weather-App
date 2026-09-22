import { useState } from "react";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaCloudSun,
  FaTint,
  FaWind,
  FaEye,
  FaTemperatureHigh
} from "react-icons/fa";

import "./Home.css";

function Home() {

  // Search state
  const [city, setCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");


  // Search function
  const handleSearch = () => {

    const enteredCity = city.trim();

    if (enteredCity === "") {
      alert("Please enter a city name");
      return;
    }

    setSearchedCity(enteredCity);
  };


  // 5 day forecast
  const forecast = [
    {
      day: "MON",
      icon: "☀️",
      temperature: "32°C"
    },
    {
      day: "TUE",
      icon: "🌤️",
      temperature: "30°C"
    },
    {
      day: "WED",
      icon: "🌧️",
      temperature: "27°C"
    },
    {
      day: "THU",
      icon: "⛅",
      temperature: "29°C"
    },
    {
      day: "FRI",
      icon: "☀️",
      temperature: "33°C"
    }
  ];


  // Weather statistics
  const stats = [
    {
      icon: <FaTint />,
      title: "Humidity",
      value: "65%",
      description: "Current humidity",
      type: "blue"
    },
    {
      icon: <FaWind />,
      title: "Wind Speed",
      value: "12 km/h",
      description: "Moderate wind",
      type: "orange"
    },
    {
      icon: <FaEye />,
      title: "Visibility",
      value: "10 km",
      description: "Clear visibility",
      type: "blue"
    },
    {
      icon: <FaTemperatureHigh />,
      title: "Feels Like",
      value: "31°C",
      description: "Feels warmer",
      type: "orange"
    }
  ];


  return (
    <div className="weather-app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">

          <div className="logo-icon">
            <FaCloudSun />
          </div>

          <span>
            Weather<span>App</span>
          </span>

        </div>


        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#forecast">Forecast</a>

          <a href="#details">Details</a>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <p className="hero-small">
            <FaCloudSun />
            WEATHER FORECAST
          </p>


          <h1>
            Know the weather.
            <br />
            <span>Plan your day.</span>
          </h1>


          <p className="hero-description">
            Get accurate weather information with a
            simple and beautiful experience.
          </p>


          {/* ================= SEARCH ================= */}

          <div className="search-box">

            <FaMapMarkerAlt />

            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />


            <button
              type="button"
              onClick={handleSearch}
            >
              <FaSearch />
              Search
            </button>

          </div>

        </div>

      </section>


      {/* ================= CURRENT WEATHER ================= */}

      <section className="current-section">

        <div className="section-title">

          <span>CURRENT WEATHER</span>

          <h2>Today's Weather</h2>

          <p>
            Current weather conditions at your location.
          </p>

        </div>


        <div className="current-card">

          {/* LOCATION */}

          <div className="location">

            <FaMapMarkerAlt />

            <div>

              <h3>
                {searchedCity || "Hyderabad"}
              </h3>

              <p>
                India
              </p>

            </div>

          </div>


          {/* TEMPERATURE */}

          <div className="temperature">

            <div className="weather-icon">
              ☀️
            </div>

            <div>

              <strong>
                31°C
              </strong>

              <p>
                Sunny
              </p>

            </div>

          </div>


          {/* MESSAGE */}

          <div className="weather-message">

            <h3>
              Perfect weather!
            </h3>

            <p>
              Enjoy your day with clear skies
              and comfortable weather.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FORECAST ================= */}

      <section
        className="forecast-section"
        id="forecast"
      >

        <div className="section-title">

          <span>5-DAY FORECAST</span>

          <h2>Upcoming Weather</h2>

          <p>
            Stay prepared for the days ahead.
          </p>

        </div>


        <div className="forecast-grid">

          {forecast.map((item) => (

            <div
              className="forecast-card"
              key={item.day}
            >

              <span className="forecast-day">
                {item.day}
              </span>

              <div className="forecast-icon">
                {item.icon}
              </div>

              <strong>
                {item.temperature}
              </strong>

              <small>
                Sunny
              </small>

            </div>

          ))}

        </div>

      </section>


      {/* ================= WEATHER DETAILS ================= */}

      <section
        className="stats-section"
        id="details"
      >

        <div className="section-title">

          <span>WEATHER DETAILS</span>

          <h2>Today's Statistics</h2>

          <p>
            Important weather information at a glance.
          </p>

        </div>


        <div className="stats-grid">

          {stats.map((stat) => (

            <div
              className={`stat-card ${stat.type}`}
              key={stat.title}
            >

              <div className="stat-icon">
                {stat.icon}
              </div>


              <div className="stat-content">

                <span>
                  {stat.title}
                </span>

                <strong>
                  {stat.value}
                </strong>

                <small>
                  {stat.description}
                </small>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <FaCloudSun />

        <span>
          WeatherApp
        </span>

        <p>
          Weather made simple.
        </p>

      </footer>

    </div>
  );
}

export default Home;