import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import device from './device/reducer';

export default combineReducers({
  auth,
  user,
  device,
});
