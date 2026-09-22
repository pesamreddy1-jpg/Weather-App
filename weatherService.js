import axios from "axios";

const API_URL = "http://localhost:8080/api/weather";

export const searchWeather = async (city) => {
  const response = await axios.get(
    `${API_URL}/search`,
    {
      params: {
        city: city
      }
    }
  );

  return response.data;
};