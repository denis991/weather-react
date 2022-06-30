import React, { useState, useEffect,} from 'react';
import { v4 } from 'uuid';
import styles from './Anime.module.css';

const Anime = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '49c374280bmsha4a0616ffb18e40p19f0fcjsn732407a5f6fd',
        'X-RapidAPI-Host': 'animes3.p.rapidapi.com',
      },
    };
    fetch('https://animes3.p.rapidapi.com/', options)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setAnimes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={styles.container}>
        {animes.map((item) => (
          <div className={styles.container_anime} key={v4()}>
            <p>Name: {item.title}</p>
            <p>Genre: {item.name}</p>
            <img src={item.img} style={{ width: '70px' }} alt="" />
          </div>
        ))}
      </div>
    );
  }
};

export default Anime;
