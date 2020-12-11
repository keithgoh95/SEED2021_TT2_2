import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
console.log(`Base URL ${process.env.REACT_APP_BASE_URL}`);
// axios.defaults.headers.post['x-api-key'] = 'Vpav6D8cup4nmv4ae228i7PRhuKmUSLC7baFGFLC';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const postLogin = (username, password) => {
  // const config = {
  //   headers: {
  //     'content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'POST',
  //     'Access-Control-Allow-Headers': 'x-api-key',
  //     'x-api-key': 'Vpav6D8cup4nmv4ae228i7PRhuKmUSLC7baFGFLC',
  //     'X-Requested-With': 'XMLHttpRequest',
  //   }
  // };
  // return axios.post('/Login', { username, password }, config)
  //   .then((response) => console.log(response))
  //   .catch((error) => {
  //     console.log(`API postLogin failed with error message: ${error}`);
  //     throw (error);
  //   });
  return {
    phoneNumber: '(+65) 93371981',
    custID: 2,
    lastName: 'Blanda',
    address: '371 Elbert Causeway',
    email: 'Darrell@gmail.com',
    firstName: 'Darrell',
    nric: 'S67446564M',
    gender: 'Male',
    age: 34
  };
};

const getAllUsers = () => {
  return [
    {
      phoneNumber: '(+65) 99983106',
      custID: 7,
      lastName: 'Cruickshank',
      address: '3735 Wehner Pine',
      email: 'Mandy@hotmail.com',
      firstName: 'Mandy',
      nric: 'S53290707U',
      gender: 'Female',
      age: 27
    },
    {
      phoneNumber: '(+65) 98271258',
      custID: 8,
      lastName: 'Buckridge',
      address: '3464 Reina Dam',
      email: 'Lamar@gmail.com',
      firstName: 'Lamar',
      nric: 'S14647302I',
      gender: 'Male',
      age: 36
    },
    {
      phoneNumber: '(+65) 97865875',
      custID: 10,
      lastName: 'Leannon',
      address: '519 Erika Islands',
      email: 'Eloise@yahoo.com',
      firstName: 'Eloise',
      nric: 'S86932393N',
      gender: 'Male',
      age: 63
    },
    {
      phoneNumber: '(+65) 97806355',
      custID: 3,
      lastName: 'Pfeffer',
      address: '45571 Ashtyn Mall',
      email: 'Johathan@yahoo.com',
      firstName: 'Johathan',
      nric: 'S85645963A',
      gender: 'Male',
      age: 27
    },
    {
      phoneNumber: '(+65) 93371981',
      custID: 2,
      lastName: 'Blanda',
      address: '371 Elbert Causeway',
      email: 'Darrell@gmail.com',
      firstName: 'Darrell',
      nric: 'S67446564M',
      gender: 'Male',
      age: 34
    },
    {
      phoneNumber: '(+65) 98964866',
      custID: 21,
      lastName: 'Marvin',
      address: '03030 Ruecker Rue',
      email: 'Karl@yahoo.com',
      firstName: 'Karl',
      nric: 'S89312503E',
      gender: 'Female',
      age: 73
    },
    {
      phoneNumber: '(+65) 99419645',
      custID: 14,
      lastName: 'Collier',
      address: '7494 Raymundo Hollow',
      email: 'Frank@hotmail.com',
      firstName: 'Frank',
      nric: 'S26833716H',
      gender: 'Male',
      age: 83
    },
    {
      phoneNumber: '(+65) 99193225',
      custID: 18,
      lastName: 'Kuhn',
      address: "1044 O'Conner Spur",
      email: 'Zella@hotmail.com',
      firstName: 'Zella',
      nric: 'S66328582B',
      gender: 'Male',
      age: 85
    },
    {
      phoneNumber: '(+65) 96146866',
      custID: 25,
      lastName: 'Schneider',
      address: '960 Pamela Freeway',
      email: 'Marjorie@gmail.com',
      firstName: 'Marjorie',
      nric: 'S85306377X',
      gender: 'Male',
      age: 71
    },
    {
      phoneNumber: '(+65) 95888161',
      custID: 12,
      lastName: 'Nikolaus',
      address: '7957 Gavin Key',
      email: 'Cortez@gmail.com',
      firstName: 'Cortez',
      nric: 'S76757490Q',
      gender: 'Female',
      age: 65
    },
    {
      phoneNumber: '(+65) 97796485',
      custID: 9,
      lastName: 'Swaniawski',
      address: '226 Emmet Island',
      email: 'Trey@gmail.com',
      firstName: 'Trey',
      nric: 'S64844582F',
      gender: 'Male',
      age: 67
    },
    {
      phoneNumber: '(+65) 92244366',
      custID: 4,
      lastName: 'Kertzmann',
      address: '12524 Breanna Avenue',
      email: 'Elvis@yahoo.com',
      firstName: 'Elvis',
      nric: 'S57115559Q',
      gender: 'Female',
      age: 73
    },
    {
      phoneNumber: '(+65) 92968449',
      custID: 13,
      lastName: 'Erdman',
      address: '558 Louie Causeway',
      email: 'Steve@gmail.com',
      firstName: 'Steve',
      nric: 'S20693257E',
      gender: 'Male',
      age: 44
    },
    {
      phoneNumber: '(+65) 96636786',
      custID: 16,
      lastName: 'Ritchie',
      address: '63038 Bode Turnpike',
      email: 'Charlotte@hotmail.com',
      firstName: 'Charlotte',
      nric: 'S81472516H',
      gender: 'Female',
      age: 54
    },
    {
      phoneNumber: '(+65) 94454731',
      custID: 17,
      lastName: 'Davis',
      address: '89629 Abner Canyon',
      email: 'Margarett@gmail.com',
      firstName: 'Margarett',
      nric: 'S15162874K',
      gender: 'Female',
      age: 47
    },
    {
      phoneNumber: '(+65) 94560208',
      custID: 6,
      lastName: 'Koelpin',
      address: '0192 Graciela Terrace',
      email: 'Ebba@yahoo.com',
      firstName: 'Ebba',
      nric: 'S63054361X',
      gender: 'Male',
      age: 85
    },
    {
      phoneNumber: '(+65) 96999864',
      custID: 20,
      lastName: "O'Conner",
      address: '2616 Coy Meadows',
      email: 'Waldo@yahoo.com',
      firstName: 'Waldo',
      nric: 'S24219515V',
      gender: 'Male',
      age: 69
    },
    {
      phoneNumber: '(+65) 91032995',
      custID: 19,
      lastName: 'Herzog',
      address: '156 Howell Walks',
      email: 'Kaylee@hotmail.com',
      firstName: 'Kaylee',
      nric: 'S46648703F',
      gender: 'Male',
      age: 67
    },
    {
      phoneNumber: '(+65) 91519286',
      custID: 1,
      lastName: 'Rath',
      address: '093 Marques River',
      email: 'Cora@yahoo.com',
      firstName: 'Cora',
      nric: 'S47465102R',
      gender: 'Male',
      age: 29
    },
    {
      phoneNumber: '(+65) 99186273',
      custID: 5,
      lastName: 'Anderson',
      address: '729 Cormier Stravenue',
      email: 'Cade@yahoo.com',
      firstName: 'Cade',
      nric: 'S11578379A',
      gender: 'Male',
      age: 39
    },
    {
      phoneNumber: '(+65) 94119778',
      custID: 22,
      lastName: 'Grant',
      address: '357 Concepcion Point',
      email: 'Celia@hotmail.com',
      firstName: 'Celia',
      nric: 'S65397008M',
      gender: 'Female',
      age: 44
    },
    {
      phoneNumber: '(+65) 99699735',
      custID: 24,
      lastName: 'Franecki',
      address: '4661 Marcelina Plaza',
      email: 'Camila@hotmail.com',
      firstName: 'Camila',
      nric: 'S39695851N',
      gender: 'Female',
      age: 74
    },
    {
      phoneNumber: '(+65) 93024938',
      custID: 23,
      lastName: 'Stokes',
      address: '270 Elnora Vista',
      email: 'Jude@yahoo.com',
      firstName: 'Jude',
      nric: 'S69421467D',
      gender: 'Female',
      age: 38
    },
    {
      phoneNumber: '(+65) 97628984',
      custID: 15,
      lastName: 'Fritsch',
      address: '371 Tara Inlet',
      email: 'Kamren@gmail.com',
      firstName: 'Kamren',
      nric: 'S67523958E',
      gender: 'Male',
      age: 42
    },
    {
      phoneNumber: '(+65) 92715306',
      custID: 11,
      lastName: 'Champlin',
      address: '330 Batz Fields',
      email: 'Imogene@yahoo.com',
      firstName: 'Imogene',
      nric: 'S65589379F',
      gender: 'Female',
      age: 26
    }
  ];
};

const getUserAccountDetails = (custId) => {
  return [
    {
      accountName: 'Current Account',
      availableBal: 998.79,
      accountNumber: 56624832,
      linked: false
    },
    {
      accountName: 'Multiplier Account',
      availableBal: 396.22,
      accountNumber: 99308424,
      linked: false
    },
    {
      accountName: 'Saving Account',
      availableBal: 239.35,
      accountNumber: 78828764,
      linked: true
    }
  ];
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
};
