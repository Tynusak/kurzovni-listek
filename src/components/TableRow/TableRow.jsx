import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TableRow.css';

export const TableRow = ({ currency, index }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${index}`);
  };
  return (
    <tr className="rowMain" onClick={handleClick}>
      <td className="country">{currency.country}</td>
      <td className="currency">{currency.name}</td>
      <td>{currency.shortName}</td>
      <td>{currency.amount}</td>
      <td>{currency.currMid}</td>
      <td>{currency.move}</td>
    </tr>
  );
};
