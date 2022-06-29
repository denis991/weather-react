import React, { useEffect, useState } from 'react';
import AmountOfDays from '../AmountOfDays/AmountOfDays';
import InputSiti from '../inputSiti/InputSiti';
// import './Forecast.module.css';
function Forecast() {
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState(false);
  const [items, setItems] = useState([]);
  const [sityName, setsityName] = useState('London');
  const [amountOfDays, setamountOfDays] = useState(5);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${sityName}&cnt=${amountOfDays}&lang=ru&appid=1f8ebeac61978aeeb114cd9342d69019`)
      .then((res) => res.json())
      .then(
        (result) => {
          setForecast(true);
          // console.log(result);
          setItems(result);
        },
        (eror) => {
          setForecast(true);
          setError(eror);
        },
      );
  }, [amountOfDays, sityName]);

  if (error) {
    return (
      <div>
        Ошибка:
        {error.message}
      </div>
    );
  } if (!forecast) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <InputSiti sityName={sityName} setsityName={setsityName} />
      <AmountOfDays amountOfDays={amountOfDays} setamountOfDays={setamountOfDays} />
      <ul>
        {items?.city?.name}
        {items?.list?.map((item) => (
          <li key={item.dt}>
            {item.dt_txt}
            🥴влажность:%
            {' '}
            {item.humidity}
            {' '}
            🌡температура:
            {' '}
            {(item.main.temp - 273.1).toFixed(2)}
            {'°C '}
            🌡температура мин:
            {' '}
            {(item.main.temp_min - 273.1).toFixed(2)}
            {'°C '}
            🌡температура макс:
            {' '}
            {(item.main.temp_max - 273.1).toFixed(2)}
            {'°C '}
            скрость ветра:m/s
            {' '}
            {item.wind.speed}
            {' '}
            направление ветра:
            {' '}
            {item.wind.deg}
            {' '}
            давление:hPa
            {' '}
            {item.main.pressure}
            {' '}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Forecast;
