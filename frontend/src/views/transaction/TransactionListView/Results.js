import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import baseApi from '../../../api/base-api.js'

const columns = [
  { field: 'payeeID', headerName: 'Payee ID', width: 150 },
  { field: 'dateTime', headerName: 'Date', width: 250 },
  { field: 'amount', headerName: 'Amount', width: 200},
  { field: 'eGift', headerName: 'eGift', width: 100},
  { field: 'expensesCat', headerName: 'Category', width: 200}
];
const custID = 2;

export default function Results()  {
  const [state, setState] = useState([])

  useEffect(async ()=>{
    let rows = []

    try {
      rows = await baseApi.getUserTransactionDetails(custID);
    } catch (e) {
      console.log(e);
    }

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

