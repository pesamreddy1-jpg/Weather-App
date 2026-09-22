import {
  FaSun,
  FaMapMarkerAlt,
  FaTint,
  FaWind,
  FaEye,
  FaSun as FaSunrise,
  FaMoon
} from "react-icons/fa";

import "./WeatherCard.css";

function WeatherCard() {
  return (
    <section className="weather-section">

      {/* Section Title */}

      <div className="section-heading">

        <span>LIVE WEATHER</span>

        <h2>
          Current Weather
        </h2>

        <p>
          Weather information for your location
        </p>

      </div>


      {/* Main Weather Card */}

      <div className="weather-card">

        {/* Left Side */}

        <div className="weather-main">

          <div className="weather-location">

            <FaMapMarkerAlt />

            <span>
              Hyderabad, India
            </span>

          </div>


          <div className="temperature-area">

            <div className="weather-icon-large">

              <FaSun />

            </div>


            <div>

              <h3>
                29°
              </h3>

              <p>
                Sunny
              </p>

            </div>

          </div>


          <p className="weather-message">
            Clear skies and a beautiful day.
          </p>

        </div>


        {/* Right Side */}

        <div className="weather-details">

          {/* Humidity */}

          <div className="weather-detail">

            <div className="detail-icon blue">
              <FaTint />
            </div>

            <div>
              <span>Humidity</span>
              <strong>65%</strong>
            </div>

          </div>


          {/* Wind */}

          <div className="weather-detail">

            <div className="detail-icon orange">
              <FaWind />
            </div>

            <div>
              <span>Wind Speed</span>
              <strong>12 km/h</strong>
            </div>

          </div>


          {/* Visibility */}

          <div className="weather-detail">

            <div className="detail-icon blue">
              <FaEye />
            </div>

            <div>
              <span>Visibility</span>
              <strong>10 km</strong>
            </div>

          </div>


          {/* Sunrise */}

          <div className="weather-detail">

            <div className="detail-icon orange">
              <FaSunrise />
            </div>

            <div>
              <span>Sunrise</span>
              <strong>6:10 AM</strong>
            </div>

          </div>


          {/* Sunset */}

          <div className="weather-detail">

            <div className="detail-icon blue">
              <FaMoon />
            </div>

            <div>
              <span>Sunset</span>
              <strong>6:45 PM</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WeatherCard;