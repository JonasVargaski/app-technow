import io from 'socket.io-client';
import { api_url } from '../config/endpoint';

export default io(api_url, {
  token: 'jwt',
});
