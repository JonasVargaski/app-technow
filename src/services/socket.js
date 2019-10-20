import io from 'socket.io-client';

export default io('http://localhost:3333', {
  token: 'jwt',
});
