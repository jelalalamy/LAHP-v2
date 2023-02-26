import { useState, useEffect } from 'react'

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        //getWeather(latitude, longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const getWeather = (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(2)}&longitude=${lon.toFixed(2)}&hourly=temperature_2m,weathercode&current_weather=true`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current_weather);
        console.log(data.current_weather);
      });
  };

  const weathercodeToText = (code) => {
    if (code === 0) {
      return 'Clear sky';
    } else if (code === 1) {
      return 'Mainly clear';
    } else if (code === 2) {
      return 'Partly cloudy';
    } else if (code === 3) {
      return 'Overcast';
    } else if (code === 45) {
      return 'Fog';
    } else if (code === 48) {
      return 'Depositing rime fog';
    } else if (code === 51) {
      return 'Drizzle: Light intensity';
    } else if (code === 53) {
      return 'Drizzle: Moderate intensity';
    } else if (code === 55) {
      return 'Drizzle: Dense intensity';
    } else if (code === 56) {
      return 'Freezing Drizzle: Light intensity';
    } else if (code === 57) {
      return 'Freezing Drizzle: Dense intensity';
    } else if (code === 61) {
      return 'Rain: Slight intensity';
    } else if (code === 63) {
      return 'Rain: Moderate intensity';
    } else if (code === 65) {
      return 'Rain: Heavy intensity';
    } else if (code === 66) {
      return 'Freezing Rain: Light intensity';
    } else if (code === 67) {
      return 'Freezing Rain: Heavy intensity';
    } else if (code === 71) {
      return 'Snow fall: Slight intensity';
    } else if (code === 73) {
      return 'Snow fall: Moderate intensity';
    } else if (code === 75) {
      return 'Snow fall: Heavy intensity';
    } else if (code === 77) {
      return 'Snow grains';
    } else if (code === 80) {
      return 'Rain showers: Slight intensity';
    } else if (code === 81) {
      return 'Rain showers: Moderate intensity';
    } else if (code === 82) {
      return 'Rain showers: Violent intensity';
    } else if (code === 85) {
      return 'Snow showers: Slight intensity';
    } else if (code === 86) {
      return 'Snow showers: Heavy intensity';
    } else if (code === 95) {
      return 'Thunderstorm: Slight intensity';
    } else if (code === 96) {
      return 'Thunderstorm: Moderate intensity';
    } else if (code === 99) {
      return 'Thunderstorm: Heavy hail';
    } else {
      return 'Unknown';
    }
  };


  return (
    <div className="flex justify-center">
      <div className='w-96 h-60 flex flex-col border-none py-4 select-none justify-center'>
        <div className='mx-auto flex flex-row text-6xl'>
          <span className="mx-auto">
            {weather ? `${weather.temperature} °C` : `-`} 
          </span>
        </div>
        <div className='mx-auto mt-2 flex flex-row text-gray-300'>
          {weather ? weathercodeToText(weather.weathercode) : 'Unknown'}
        </div>
        <div className='mx-auto mt-2 flex flex-row text-gray-300'>
          <span className='mr-2'>Wind</span>
          {weather ? weather.windspeed : `-`} km/h
        </div>
        <div className='mx-auto mt-2 flex flex-row text-gray-300 text-sm'>
          <span className='mr-2'>Last updated:</span>
          {weather ? `${weather.time.split("T")[0]}, ${weather.time.split("T")[1]} UTC` : `Unknown`}
        </div>
      </div>
    </div>
  )
}

export default Weather