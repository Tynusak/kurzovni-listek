import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TableRow = ({ currency, index, onRowClick }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    onRowClick(index);
    navigate(`/detail/${currency.shortName}`);
  };
  return (
    <tr onClick={handleClick}>
      <td className="country">{currency.country}</td>
      <td className="currency">{currency.name}</td>
      <td>{currency.shortName}</td>
      <td>{currency.amount}</td>
      <td>{currency.currMid}</td>
      <td>{currency.move}</td>
    </tr>
  );
};
