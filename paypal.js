import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const base = 'https://api-m.sandbox.paypal.com';

// export async function createOrder() {
//   const accessToken = await generateAccessToken();

//   const url = `https://api-m.sandbox.paypal.com/v2/checkout/orders/`;

//   const res = await fetch(url, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${accessToken}`,
//     },
//     body: JSON.stringify({
//       intent: 'CAPTURE',
//       purchase_units: [
//         {
//           reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
//           amount: { currency_code: 'USD', value: '100.00' },
//         },
//       ],
//       payment_source: {
//         paypal: {
//           experience_context: {
//             payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
//             brand_name: 'EXAMPLE INC',
//             locale: 'en-US',
//             landing_page: 'LOGIN',
//             user_action: 'PAY_NOW',
//             return_url: 'https://example.com/returnUrl',
//             cancel_url: 'https://example.com/cancelUrl',
//           },
//         },
//       },
//     }),
//   });

//   const data = await res.json();
//   console.log(data);
// }

// export async function capturePayment(orderID) {
//   const accessToken = await generateAccessToken();

//   const url = `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`;

//   const res = await fetch(url, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   const data = await res.json();
//   console.log(data);
//   return data;
// }

//fetch invoices
export const getInvoices = (accessToken) => {
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
