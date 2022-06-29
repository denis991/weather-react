import React, { useState } from 'react';
import classes from './InputSiti.module.css';

function InputSiti({ sityName, setsityName }) {
  return (
    <div className={classes.viewport}>
      <select value={sityName} onChange={(e) => setsityName(e.target.value)} id="cities">
        {/* <SityName /> */}

        <option value="Moscow">Moscow</option>
        <option value="Naples">Naples</option>
        <option value="London">London</option>
        <option value="Berlin">Berlin</option>
        <option value="New York">New York</option>
        <option value="Frattamaggiore">Frattamaggiore</option>
        <option value="Rome">Rome</option>
        <option value="Paris">Paris</option>
        <option value="Milan">Milan</option>
        <option value="Florence">Florence</option>
        <option value="Venice">Venice</option>
        <option value="Bologna">Bologna</option>
        <option value="Turin">Turin</option>
        <option value="Genoa">Genoa</option>
        <option value="Moskva">Moskva</option>
        <option value="Kiev">Kiev</option>
        <option value="Minsk">Minsk</option>
        <option value="Warszawa">Warszawa</option>
        <option value="Budapest">Budapest</option>
        <option value="Praga">Praga</option>
        <option value="Bergen">Bergen</option>
        <option value="Oslo">Oslo</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Helsinki">Helsinki</option>
        <option value="Riga">Riga</option>
        <option value="Vilnius">Vilnius</option>
        <option value="Lisbon">Lisbon</option>
        <option value="Bruxelles">Bruxelles</option>
        <option value="Madrid">Madrid</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Valencia">Valencia</option>
      </select>
    </div>
  );
}

export default InputSiti;
