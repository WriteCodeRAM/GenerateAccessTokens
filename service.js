import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const base = 'https://api-m.sandbox.paypal.com';

//fetch invoices
const getInvoices = (accessToken) => {
  axios
    .get(base + '/v1/invoicing/invoices', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      console.log('invoice endpoint');
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default getInvoices;
