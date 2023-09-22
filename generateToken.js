import axios from 'axios';

// Replace base with your API access token endpoint
const base = 'https://api-m.sandbox.paypal.com/v1/oauth2/token';

// Function to generate and store the access token
export default async function generateAccessToken() {
  let accessToken = '';
  try {
    const response = await axios.post(base, 'grant_type=client_credentials', {
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_SECRET,
      },
    });

    // Store the access token
    accessToken = response.data.access_token;
    console.log(`Token generated: ${accessToken}`);
    return accessToken;
  } catch (error) {
    console.error('Error generating access token:', error.message);
  }
}
