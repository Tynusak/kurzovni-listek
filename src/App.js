import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Detail } from './components/Detail/Detail';

export const App = () => {
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    fetch(
      'https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e',
    )
      .then((response) => response.json())
      .then((data) => setCurrencies(data));
  }, []);

  return currencies === null ? (
    '..Loading'
  ) : (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={currencies} />} />
          <Route
            path="/detail/:id"
            element={<Detail currency={currencies} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
