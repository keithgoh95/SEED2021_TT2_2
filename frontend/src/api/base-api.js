import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
console.log(`Base URL ${process.env.REACT_APP_BASE_URL}`);
// axios.defaults.headers.post['x-api-key'] = ;

const postLogin = (username, password) => {
  return axios.post('/Login', { username, password }, { headers: { 'x-api-key': 'Vpav6D8cup4nmv4ae228i7PRhuKmUSLC7baFGFLC' } })
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(`API postLogin failed with error message: ${error}`);
      throw (error);
    });
};

export default {
  postLogin
};
