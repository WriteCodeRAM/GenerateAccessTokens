// Replace base with your API access token endpoint
const base = 'https://api-m.sandbox.paypal.com/v1/oauth2/token';

// Function to generate and store the access token
export default async function generateAccessToken() {
  let accessToken = '';
  try {
    const response = await fetch(base, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(
          `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
        )}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // save the access token
    accessToken = data.access_token;
    console.log(`Token generated: ${accessToken}`);
    return accessToken;
  } catch (error) {
    console.error('Error generating access token:', error.message);
  }
}
