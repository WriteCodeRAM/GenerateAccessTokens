import express from 'express';
import dotenv from 'dotenv';
import generateAccessToken from './generateToken.js';
import getInvoices from './service.js';

dotenv.config();
const app = express();

// Run generateAccessToken on server start and every x milliseconds
const tokenRefreshTime = 10000; // Adjust this time as needed (1000ms = 1s)
setInterval(generateAccessToken, tokenRefreshTime);

let accessToken = '';

// route to fetch invoices
app.get('/invoices', async (req, res) => {
  try {
    // if accessToken is empty generate a new one
    if (!accessToken) {
      accessToken = await generateAccessToken();
    }

    // Use the access token to fetch invoices
    const invoices = await getInvoices(accessToken);

    // Send the retrieved invoices as JSON response
    res.json({ invoices });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch invoices' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
