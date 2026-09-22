import {
  FaSun,
  FaCloudSun,
  FaCloudRain,
  FaCloud,
  FaBolt
} from "react-icons/fa";

import "./ForecastCard.css";


function ForecastCard() {

  const forecastData = [
    {
      day: "Today",
      date: "11 Aug",
      icon: <FaSun />,
      condition: "Sunny",
      temperature: "29°",
      low: "24°",
      type: "sun"
    },

    {
      day: "Tomorrow",
      date: "12 Aug",
      icon: <FaCloudSun />,
      condition: "Partly Cloudy",
      temperature: "28°",
      low: "23°",
      type: "cloud"
    },

    {
      day: "Wednesday",
      date: "13 Aug",
      icon: <FaCloudRain />,
      condition: "Light Rain",
      temperature: "26°",
      low: "22°",
      type: "rain"
    },

    {
      day: "Thursday",
      date: "14 Aug",
      icon: <FaCloud />,
      condition: "Cloudy",
      temperature: "27°",
      low: "23°",
      type: "cloud"
    },

    {
      day: "Friday",
      date: "15 Aug",
      icon: <FaBolt />,
      condition: "Thunderstorm",
      temperature: "25°",
      low: "21°",
      type: "storm"
    }
  ];


  return (
    <section className="forecast-section">

      {/* Heading */}

      <div className="forecast-heading">

        <span>5-DAY FORECAST</span>

        <h2>
          Weather Forecast
        </h2>

        <p>
          Plan your days with a quick look at the upcoming weather.
        </p>

      </div>


      {/* Forecast Cards */}

      <div className="forecast-grid">

        {forecastData.map((weather, index) => (

          <div
            className={`forecast-card ${weather.type}`}
            key={index}
          >

            <div className="forecast-day">

              <h3>
                {weather.day}
              </h3>

              <span>
                {weather.date}
              </span>

            </div>


            <div className="forecast-icon">

              {weather.icon}

            </div>


            <p className="forecast-condition">

              {weather.condition}

            </p>


            <div className="forecast-temperature">

              <strong>
                {weather.temperature}
              </strong>

              <span>
                / {weather.low}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


export default ForecastCard;