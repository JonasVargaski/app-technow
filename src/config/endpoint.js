export const api_url =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3333'
    : 'https://smartsec-node.herokuapp.com/';
