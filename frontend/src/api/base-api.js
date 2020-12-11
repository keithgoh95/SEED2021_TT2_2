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

const getUserAccountDetails = async (custID) => {
  const response = await axios.post('/accounts/view', { custID })
    .catch((error) => {
      console.log(`API postLogin failed with error message: ${error}`);
      throw (error);
    });
  if (!response) {
    throw ('Unable to get account details!');
  }
  return response.data;
};

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

const updateUserAccountBalance = async (custID, amount) => {
  const response = await axios.post('accounts/update', { custID, amount })
    .catch((error) => {
      console.log(`API postLogin failed with error message: ${error}`);
      throw (error);
    });
  if (!response) {
    throw ('Unable to update account balance!');
  }
  return response.data;
};

const addTransaction = async (custID, payeeID, dateTime, amount, expensesCat, eGift, message) => {
  const response = await axios.post('transaction/add',
    {
      custID, payeeID, dateTime, amount, expensesCat, eGift, message
    })
    .catch((error) => {
      console.log(`API postLogin failed with error message: ${error}`);
      throw (error);
    });
  if (!response) {
    throw ('Unable to add transaction!');
  }
  return response.data;
};

export default {
  postLogin,
  getAllUsers,
  getUserAccountDetails,
  getUserTransactionDetails,
  updateUserAccountBalance,
  addTransaction
};
