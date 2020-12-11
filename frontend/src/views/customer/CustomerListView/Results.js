import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const columns = [
  { field: 'payeeID', headerName: 'Payee ID', width: 200 },
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'amount', headerName: 'Amount', width: 200},
  { field: 'eGift', headerName: 'eGift', width: 100},
  { field: 'expensesCat', headerName: 'Category', width: 200}
];



export default function Results() {
  const [state, setState] = useState([])

  useEffect(()=>{
    const rows = [
      { id: 1, payeeID: 'STARBUCKS', date: '1-Jan-2020', amount: 10, eGift: 'No', expensesCat: 'Food' },
      { id: 2, payeeID: 'APPLE', date: '2-Jan-2020', amount: 2300, eGift: 'No', expensesCat: 'Technology' },
      { id: 3, payeeID: 'KOUFU', date: '3-Jan-2020', amount: 5, eGift: 'Yes', expensesCat: 'Food' },
      { id: 4, payeeID: 'EZLINK', date: '4-Jan-2020', amount: 50, eGift: 'No', expensesCat: 'Transport' },
      { id: 5, payeeID: 'SMU', date: '5-Jan-2020', amount: 5000, eGift: 'No', expensesCat: 'Education' },
      { id: 6, payeeID: 'SUSHI EXPRESS', date: '6-Jan-2020', amount: 40, eGift: 'No', expensesCat: 'Food' },
    ];
    if (state !== rows) {
      setState(rows)
    }
  },[]); 

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={state} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

