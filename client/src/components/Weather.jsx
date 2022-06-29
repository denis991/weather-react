import React, { useState, useEffect } from 'react';
import Forecast from './UI/Forecast/Forecast';


function Weather() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);
  return (<>
  <Forecast />;
  </>)
}

export default Weather;
