import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="navigation">
        <button
          className="nav__button"
          id="nav__button"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className={open ? 'nav__menu' : 'nav__menu nav__closed'}>
          <li className="nav__link">
            <Link to="/">Home</Link>
          </li>
          <li
            className="nav__link"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Link to="/detail/5">Euro</Link>
          </li>
          <li
            className="nav__link"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Link to="/detail/18">Dollar(USA)</Link>
          </li>
          <li
            className="nav__link"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Link to="/detail/6">Pound</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
