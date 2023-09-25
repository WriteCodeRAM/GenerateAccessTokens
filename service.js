import dotenv from 'dotenv';

dotenv.config();

const base = 'https://api-m.sandbox.paypal.com';

//fetch invoices
async function getInvoices(accessToken) {
  const endpoint = base + '/v1/invoicing/invoices';

  return fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error('Fetch error:', err);
      throw err;
    });
}

export default getInvoices;
