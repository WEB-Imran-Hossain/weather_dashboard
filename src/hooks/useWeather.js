import { useEffect, useState, useContext } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const { selectedLocation } = useContext(LocationContext);
  // console.log(selectedLocation);

  useEffect(() => {
    const fetchWeatherData = async (longitude, latitude) => {
      try {
        setLoading((prev) => {
          return {
            ...prev,
            state: true,
            message: "Fetching Weather data",
          };
        });
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&units=metric`
        );
        // console.log(response);

        if (!response.ok) {
          const errorMessage = `Fetching weather data faild: ${response.status}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        // console.log("Data:", data);

        setWeatherData((prev) => {
          return {
            ...prev,
            location: data?.name || "Unknown",
            climate: data?.weather[0]?.main || "Unknown",
            temperature: data?.main?.temp || "N/A",
            maxTemperature: data?.main?.temp_max || "N/A",
            minTemperature: data?.main?.temp_min || "N/A",
            humidity: data?.main?.humidity || "N/A",
            cloudPercentage: data?.clouds?.all || "N/A",
            wind: data?.wind?.speed || "N/A",
            time: data?.dt || "N/A",
            longitude: longitude,
            latitude: latitude,
          };
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading((prev) => {
          return {
            ...prev,
            state: false,
            message: "",
          };
        });
      }
    };

    setLoading({
      state: true,
      message: "Finding Location...",
    });

    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log("Position:", position);
      fetchWeatherData(position.coords.longitude, position.coords.latitude);
    });
  }, []);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
