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

    // const rows = [
    // {​​​​​​​​   eGift :true,
    //     dateTime :"2020-04-28T07:47:47.737Z",
    //     custID:21,
    //     expensesCat:"Shopping",
    //     amount:30.5,
    //     message:"Thanks. :)",
    //     payeeID:24
    // }​​​​​​​​,
    // {​​​​​​​​
    //     eGift:false,
    //     dateTime:"2020-04-02T15:42:50.829Z",
    //     custID:21,
    //     expensesCat:"Food",
    //     amount:5.38,
    //     message:"",
    //     payeeID:14
    // }​​​​​​​​,
    // {​​​​​​​​
    // "eGift":true,
    // "dateTime":"2020-08-08T07:36:35.897Z",
    // "custID":21,
    // "expensesCat":"Entertainment",
    // "amount":756.56,
    // "message":"Thanks. :)",
    // "payeeID":5
    // }​​​​​​​​,
    // {​​​​​​​​
    // "eGift":false,
    // "dateTime":"2020-05-08T22:45:32.274Z",
    // "custID":21,
    // "expensesCat":"Entertainment",
    // "amount":437.38,
    // "message":"",
    // "payeeID":3
    // }​​​​​​​​,
    // {​​​​​​​​
    // "eGift":true,
    // "dateTime":"2019-12-09T13:16:39.388Z",
    // "custID":21,
    // "expensesCat":"Insurance",
    // "amount":476.55,
    // "message":"Thanks. :)",
    // "payeeID":22
    // }​​​​​​​​,
    // {​​​​​​​​
    // "eGift":false,
    // "dateTime":"2020-04-20T18:34:30.993Z",
    // "custID":17,
    // "expensesCat":"Transport",
    // "amount":100.62,
    // "message":"",
    // "payeeID":21
    // }​​​​​​​​,
    // {​​​​​​​​
    // "eGift":false,
    // "dateTime":"2019-12-10T05:17:47.503Z",
    // "custID":1,
    // "expensesCat":"Shopping",
    // "amount":630.56,
    // "message":"",
    // "payeeID":21
    // }​​​​​​​​,
    // {​​​​​​​​
    // "eGift":false,
    // "dateTime":"2019-12-11T21:21:05.019Z",
    // "custID":21,
    // "expensesCat":"Transport",
    // "amount":683.55,
    // "message":"",
    // "payeeID":24
    // }​​​​​​​​,
    // {​​​​​​​​
    // "eGift":false,
    // "dateTime":"2020-01-09T06:01:41.813Z",
    // "custID":19,
    // "expensesCat":"Insurance",
    // "amount":474.74,
    // "message":"",
    // "payeeID":21
    // }​​​​​​​​,
    // {​​​​​​​​
    // "eGift":true,
    // "dateTime":"2020-05-10T19:08:19.426Z",
    // "custID":3,
    // "expensesCat":"Food",
    // "amount":69.76,
    // "message":"Thanks. :)",
    // "payeeID":21
    // }​​​​​​​​
    // ]
    
    

    // var url = 'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view';
    // fetch(url, {
    // method: 'POST',
    // headers:{
    // 'X-Requested-With': 'XMLHttpRequest'}
    // }).then(res => setState(res.json()))
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

