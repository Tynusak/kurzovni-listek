import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import './Detail.css';

export const Detail = ({ index, onMenuItemClick }) => {
  const [currency, setCurrency] = useState({});

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
      <Header onRowClick={onMenuItemClick} />
      <main className="detail">
        <h1>
          {currency === {}
            ? '...Loading'
            : `${currency.name}(${currency.country})`}
        </h1>
        <div className="cnbRate">
          <h2>Rate (ČNB mid)</h2>
          <div className="rate">
            <span>{currency.amount}</span>
            <span>{currency.shortName}</span>
            <span>=</span>
            <span>{currency.cnbMid}</span>
            <span>CZK</span>
          </div>
        </div>

        <table className="detailTable">
          <thead>
            <tr>
              <td></td>
              <td>Buy</td>
              <td>Sell</td>
              <td className="mid">Mid</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left">Current rate</td>
              <td>{currency.currBuy}</td>
              <td>{currency.currSell}</td>
              <td className="mid">{currency.currMid}</td>
            </tr>
            <tr>
              <td className="left">Previous rate</td>
              <td>{currency.valBuy}</td>
              <td>{currency.valSell}</td>
              <td className="mid">{currency.valMid}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
};
