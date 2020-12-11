import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post['x-api-key'] = process.env.REACT_APP_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

const columns = [
  { field: 'payeeID', headerName: 'Payee ID', width: 150 },
  { field: 'dateTime', headerName: 'Date', width: 250 },
  { field: 'amount', headerName: 'Amount', width: 200},
  { field: 'eGift', headerName: 'eGift', width: 100},
  { field: 'expensesCat', headerName: 'Category', width: 200}
];

const getUserTransactionDetails = async (custID) => {
  const response = await axios.post('/transaction/view', { custID })
    .catch((error) => {
      console.log(`API postLogin failed with error message: ${error}`);
      throw (error);
    });
  if (!response) {
    throw ('Unable to get transcation details!');
  }
  return response.data;
};

export default function Results() {
  const [state, setState] = useState([])

  useEffect(()=>{


    const rows =[
      {
        id: 1,
        eGift: true,
        dateTime: '2020-04-28T07:47:47.737Z',
        custID: 21,
        expensesCat: 'Shopping',
        amount: 30.5,
        message: 'Thanks. :)',
        payeeID: 24
      },
      {
        id: 2,
        eGift: false,
        dateTime: '2020-04-02T15:42:50.829Z',
        custID: 21,
        expensesCat: 'Food',
        amount: 5.38,
        message: '',
        payeeID: 14
      },
      {
        id: 3,
        eGift: true,
        dateTime: '2020-08-08T07:36:35.897Z',
        custID: 21,
        expensesCat: 'Entertainment',
        amount: 756.56,
        message: 'Thanks. :)',
        payeeID: 5
      },
      {
        id: 4,
        eGift: false,
        dateTime: '2020-05-08T22:45:32.274Z',
        custID: 21,
        expensesCat: 'Entertainment',
        amount: 437.38,
        message: '',
        payeeID: 3
      },
      {
        id: 5,
        eGift: true,
        dateTime: '2019-12-09T13:16:39.388Z',
        custID: 21,
        expensesCat: 'Insurance',
        amount: 476.55,
        message: 'Thanks. :)',
        payeeID: 22
      },
      {
        id: 6,
        eGift: false,
        dateTime: '2020-04-20T18:34:30.993Z',
        custID: 17,
        expensesCat: 'Transport',
        amount: 100.62,
        message: '',
        payeeID: 21
      },
      {
        id: 7,
        eGift: false,
        dateTime: '2019-12-10T05:17:47.503Z',
        custID: 1,
        expensesCat: 'Shopping',
        amount: 630.56,
        message: '',
        payeeID: 21
      },
      {
        id: 8,
        eGift: false,
        dateTime: '2019-12-11T21:21:05.019Z',
        custID: 21,
        expensesCat: 'Transport',
        amount: 683.55,
        message: '',
        payeeID: 24
      },
      {
        id: 9,
        eGift: false,
        dateTime: '2020-01-09T06:01:41.813Z',
        custID: 19,
        expensesCat: 'Insurance',
        amount: 474.74,
        message: '',
        payeeID: 21
      },
      {
        id: 10,
        eGift: true,
        dateTime: '2020-05-10T19:08:19.426Z',
        custID: 3,
        expensesCat: 'Food',
        amount: 69.76,
        message: 'Thanks. :)',
        payeeID: 21
      }
    ];

    var url = 'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view';
    fetch(url, {
      method: 'GET',
      headers:{
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));

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

