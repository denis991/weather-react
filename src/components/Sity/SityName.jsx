import React, { useState, useEffect } from 'react';

function SityName() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sitiNames, setNameCity] = useState([]);
  console.log('-------------------');
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch('https://datahub.io/core/country-list/r/0.json')
      .then((res) => {
        console.log(res);
        return res.json();
      });
    // .then(
    //   (result) => {
    //     setIsLoaded(true);
    //     console.log('----', result);
    //     setNameCity(result);
    //   },
    //   (erro) => {
    //     setIsLoaded(true);
    //     console.log(erro);
    //     setError(erro);
    //   },
    // );
  }, []);

  if (error) {
    return (
      <div>
        Ошибка:
        {error.message}
      </div>
    );
  } if (!isLoaded) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      {sitiNames.map((item) => (
        <option key={item.Code} value={item.Name}>
          {item.Name}

        </option>
      ))}
    </>
  );
}
export default SityName;
