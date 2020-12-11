import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post['x-api-key'] = process.env.REACT_APP_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

const postLogin = async (username, password) => {
  const response = await axios.post('/login', { username, password })
    .catch((error) => {
      console.log(`API postLogin failed with error message: ${error}`);
      throw (error);
    });
  if (!response) {
    throw ('Login Failed!');
  }
  return response.data;
};

const getAllUsers = async () => {

  const response = await axios.post('/users')
    .catch((error) => {
      console.log(`API postLogin failed with error message: ${error}`);
      throw (error);
    });
  if (!response) {
    throw ('Unable to get users!');
  }
  return response.data;
};

const getUserAccountDetails = (custId) => {
  const response = await axios.post('/login', { username, password })
    .catch((error) => {
      console.log(`API postLogin failed with error message: ${error}`);
      throw (error);
    });
  if (!response) {
    throw ('Login Failed!');
  }
  return response.data;
};

const getUserTransactionDetails = (custId) => {
  return [
    {
      eGift: true,
      dateTime: '2020-04-28T07:47:47.737Z',
      custID: 21,
      expensesCat: 'Shopping',
      amount: 30.5,
      message: 'Thanks. :)',
      payeeID: 24
    },
    {
      eGift: false,
      dateTime: '2020-04-02T15:42:50.829Z',
      custID: 21,
      expensesCat: 'Food',
      amount: 5.38,
      message: '',
      payeeID: 14
    },
    {
      eGift: true,
      dateTime: '2020-08-08T07:36:35.897Z',
      custID: 21,
      expensesCat: 'Entertainment',
      amount: 756.56,
      message: 'Thanks. :)',
      payeeID: 5
    },
    {
      eGift: false,
      dateTime: '2020-05-08T22:45:32.274Z',
      custID: 21,
      expensesCat: 'Entertainment',
      amount: 437.38,
      message: '',
      payeeID: 3
    },
    {
      eGift: true,
      dateTime: '2019-12-09T13:16:39.388Z',
      custID: 21,
      expensesCat: 'Insurance',
      amount: 476.55,
      message: 'Thanks. :)',
      payeeID: 22
    },
    {
      eGift: false,
      dateTime: '2020-04-20T18:34:30.993Z',
      custID: 17,
      expensesCat: 'Transport',
      amount: 100.62,
      message: '',
      payeeID: 21
    },
    {
      eGift: false,
      dateTime: '2019-12-10T05:17:47.503Z',
      custID: 1,
      expensesCat: 'Shopping',
      amount: 630.56,
      message: '',
      payeeID: 21
    },
    {
      eGift: false,
      dateTime: '2019-12-11T21:21:05.019Z',
      custID: 21,
      expensesCat: 'Transport',
      amount: 683.55,
      message: '',
      payeeID: 24
    },
    {
      eGift: false,
      dateTime: '2020-01-09T06:01:41.813Z',
      custID: 19,
      expensesCat: 'Insurance',
      amount: 474.74,
      message: '',
      payeeID: 21
    },
    {
      eGift: true,
      dateTime: '2020-05-10T19:08:19.426Z',
      custID: 3,
      expensesCat: 'Food',
      amount: 69.76,
      message: 'Thanks. :)',
      payeeID: 21
    }
  ];
};

const updateUserAccountBalance = (custId, amount) => {
  return true;
};

const addTransaction = (custID, payeeID, dateTime, amount, expensesCat, eGift, message) => {
  return [
    {
      eGift: true,
      dateTime: '2020-04-28T07:47:47.737Z',
      custID: 21,
      expensesCat: 'Shopping',
      amount: 30.5,
      message: 'Thanks. :)',
      payeeID: 24
    },
    {
      eGift: false,
      dateTime: '2020-04-02T15:42:50.829Z',
      custID: 21,
      expensesCat: 'Food',
      amount: 5.38,
      message: '',
      payeeID: 14
    },
    {
      eGift: true,
      dateTime: '2020-08-08T07:36:35.897Z',
      custID: 21,
      expensesCat: 'Entertainment',
      amount: 756.56,
      message: 'Thanks. :)',
      payeeID: 5
    },
    {
      eGift: false,
      dateTime: '2020-05-08T22:45:32.274Z',
      custID: 21,
      expensesCat: 'Entertainment',
      amount: 437.38,
      message: '',
      payeeID: 3
    },
    {
      eGift: true,
      dateTime: '2019-12-09T13:16:39.388Z',
      custID: 21,
      expensesCat: 'Insurance',
      amount: 476.55,
      message: 'Thanks. :)',
      payeeID: 22
    },
    {
      eGift: false,
      dateTime: '2020-04-20T18:34:30.993Z',
      custID: 17,
      expensesCat: 'Transport',
      amount: 100.62,
      message: '',
      payeeID: 21
    },
    {
      eGift: false,
      dateTime: '2019-12-10T05:17:47.503Z',
      custID: 1,
      expensesCat: 'Shopping',
      amount: 630.56,
      message: '',
      payeeID: 21
    },
    {
      eGift: false,
      dateTime: '2019-12-11T21:21:05.019Z',
      custID: 21,
      expensesCat: 'Transport',
      amount: 683.55,
      message: '',
      payeeID: 24
    },
    {
      eGift: false,
      dateTime: '2020-01-09T06:01:41.813Z',
      custID: 19,
      expensesCat: 'Insurance',
      amount: 474.74,
      message: '',
      payeeID: 21
    },
    {
      eGift: true,
      dateTime: '2020-05-10T19:08:19.426Z',
      custID: 3,
      expensesCat: 'Food',
      amount: 69.76,
      message: 'Thanks. :)',
      payeeID: 21
    }
  ];
};

export default {
  postLogin,
  getAllUsers,
  getUserAccountDetails,
  getUserTransactionDetails,
  updateUserAccountBalance,
  addTransaction
};
