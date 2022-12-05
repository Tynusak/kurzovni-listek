import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Detail } from './components/Detail/Detail';

export const App = () => {
  const [row, setRow] = useState('');
  const handleRow = (index) => {
    setRow(index);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home onRowClick={handleRow} />} />
          <Route
            path="/detail/:id"
            element={<Detail index={row} onMenuItemClick={handleRow} />}
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
