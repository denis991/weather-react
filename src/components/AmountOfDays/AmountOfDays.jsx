import React from 'react';

function AmountOfDays({ amountOfDays, setamountOfDays }) {
  return (
    <div>
      <form>
        <input onChange={(e) => setamountOfDays(e.target.value)} type="number" step="1" min="1" max="16" placeholder="1" value={amountOfDays} name="amountOfDaysIn" />
        {' '}
        Day
      </form>
    </div>
  );
}

export default AmountOfDays;
