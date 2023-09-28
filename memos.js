// memos.js


const query = popclip.input.text

const access_token = popclip.options.access_token

const url = popclip.options.site

// // curl -X POST  https://memos.wojin.eu.org/api/v1/memo \
// //    -H "Accept: application/json" \
// //    -H "Authorization: Bearer {YOUR_ACCESS_TOKEN}"
// //    -d '{'content': 'Hello World!'}'

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


//https://www.popclip.app/dev/config#the-options-array