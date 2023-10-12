// memos.js

const query = popclip.input.text

const access_token = popclip.options.access_token 

const url = popclip.options.site + '/api/v1/memo'

const axios = require('axios');

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer '+ access_token
};

const data = {
  content: query 
};

axios.post(url, data, {headers})
  .then(res => {
    console.log(res.data); 
  })
  .catch(err => {
    console.log(err);
  }); 

