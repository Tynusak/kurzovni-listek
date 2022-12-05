import React, { useEffect, useState } from 'react';
import { TableRow } from '../TableRow/TableRow';
import './Home.css';
import { Header } from '../Header/Header';

export const Home = ({ onRowClick }) => {
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    fetch(
      'https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e',
    )
      .then((response) => response.json())
      .then((data) => setCurrencies(data));
  }, []);

  return (
    <>
      <Header onRowClick={onRowClick} />
      <hr />
      <main className="home">
        <h1>Currency exchange rates</h1>
        <table className="mainTable">
          <thead>
            <tr>
              <td className="country homecell">{'Country'}</td>
              <td className="currency">{'Currency'}</td>
              <td>{'Code'}</td>
              <td>{'Amount'}</td>
              <td>{'Rate CZK'}</td>
              <td>{'Move %'}</td>
            </tr>
          </thead>
          <tbody>
            {currencies === null ? (
              <tr>...Loading</tr>
            ) : (
              currencies.map((item, index) => (
                <TableRow
                  key={index}
                  currency={item}
                  index={index}
                  onRowClick={(index) => onRowClick(index)}
                />
              ))
            )}
          </tbody>
        </table>
      </main>
    </>
  );
};
