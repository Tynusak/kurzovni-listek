import React from 'react';
import { Header } from '../Header/Header';
import './Detail.css';
import { useParams } from 'react-router-dom';

export const Detail = ({ onMenuItemClick, currency }) => {
  let { id } = useParams();

  return (
    <>
      <Header />
      <main className="detail">
        <h1>
          {currency === {}
            ? '...Loading'
            : `${currency[id].name}(${currency[id].country})`}
        </h1>
        <div className="cnbRate">
          <h2>Rate (ČNB mid)</h2>
          <div className="rate">
            <span>{currency[id].amount}</span>
            <span>{currency[id].shortName}</span>
            <span>=</span>
            <span>{currency[id].cnbMid}</span>
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
              <td>{currency[id].currBuy}</td>
              <td>{currency[id].currSell}</td>
              <td className="mid">{currency[id].currMid}</td>
            </tr>
            <tr>
              <td className="left">Previous rate</td>
              <td>{currency[id].valBuy}</td>
              <td>{currency[id].valSell}</td>
              <td className="mid">{currency[id].valMid}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
};
