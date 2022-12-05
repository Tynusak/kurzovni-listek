import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Detail = ({ index }) => {
  const [currency, setCurrency] = useState({});
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  useEffect(() => {
    fetch(
      'https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e',
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrency(data[index]);
      });
  }, [index]);

  return (
    <>
      <header>
        <button onClick={handleClick}>Zpět</button>
      </header>
      <main>
        <h1>
          {currency === null
            ? '...Loading'
            : `${currency.name}(${currency.country})`}
        </h1>
        <div>
          <h2>Rate today (ČNB)</h2>
          <div>
            {currency.amount +
              currency.shortName +
              '=' +
              currency.cnbMid +
              'CZK'}
          </div>

          <div>Move {currency.move} %</div>
        </div>
        <table className="detailTable">
          <tr>
            <td></td>
            <td>Buy</td>
            <td>Sell</td>
            <td>Mid</td>
          </tr>
          <tr>
            <td>Current rate</td>
            <td>{currency.currBuy}</td>
            <td>{currency.currSell}</td>
            <td>{currency.currMid}</td>
          </tr>
          <tr>
            <td>Previous rate</td>
            <td>{currency.valBuy}</td>
            <td>{currency.valSell}</td>
            <td>{currency.valMid}</td>
          </tr>
        </table>
      </main>
    </>
  );
};
