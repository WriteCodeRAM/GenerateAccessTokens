import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { getInvoices } from './paypal.js';
import { searchTweets } from './twitter.js';

/*
 step 1: install the necessary dependencies by running 'npm install' in the integrated terminal
 step 2: adjust the base variable to be your api endpoint for generating a token
 step 3: ensure .env file in the left sidebar contains valid credentials
 step 4: start server (app) by running 'npm start' in the integrated terminal
 step 5: observe the terminal



 */

dotenv.config();
const app = express();

//base url for api endpoint
const base = 'https://api-m.sandbox.paypal.com/v1/oauth2/token';

// token number tracker
let num = 1;

// generate token using CLIENT_ID / CLIENT_SECURITY in .env
async function generateAccessToken() {
  let accessToken = '';
  const res = await axios({
    url: base,
    method: 'post',
    data: 'grant_type=client_credentials',
    auth: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  });

  //store the access token
  accessToken = res.data.access_token;

  console.log(`token-${num}: ${accessToken} `);
  num += 1;

  // get invoices from paypal.js
  getInvoices(accessToken);
}

//Run generateAccessToken every x milliseconds
//10000ms = 10seconds, 5000ms = 5seconds, 1000ms = 1second...
let x = 5000;
setInterval(searchTweets, x);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
