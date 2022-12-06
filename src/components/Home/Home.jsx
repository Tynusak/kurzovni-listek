import React from 'react';
import { TableRow } from '../TableRow/TableRow';
import './Home.css';
import { Header } from '../Header/Header';

export const Home = ({ data }) => {
  return (
    <>
      <Header />
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
            {data === null ? (
              <tr>...Loading</tr>
            ) : (
              data.map((item, index) => (
                <TableRow key={index} currency={item} index={index} />
              ))
            )}
          </tbody>
        </table>
      </main>
    </>
  );
};
