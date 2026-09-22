import {
  FaTint,
  FaWind,
  FaEye,
  FaTemperatureHigh
} from "react-icons/fa";

import "./WeatherStats.css";

function WeatherStats() {
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
    <section className="stats-section">

      <div className="stats-heading">
        <span>WEATHER DETAILS</span>

        <h2>Today's Statistics</h2>

        <p>
          Important weather information at a glance.
        </p>
      </div>

      <div className="stats-grid">

        {stats.map((stat, index) => (
          <div
            className={`stat-card ${stat.type}`}
            key={index}
          >

            <div className="stat-icon">
              {stat.icon}
            </div>

            <div className="stat-content">

              <span className="stat-title">
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
  );
}

export default WeatherStats;