import { RSAA } from 'redux-api-middleware';

import * as types from './actionTypes';

export const authenticate = (username, password) => ({
  [RSAA]: {
    endpoint: 'http://playground.tesonet.lt/v1/tokens',
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    types: [types.AUTHENTICATE, types.AUTHENTICATE_SUCCESS, types.AUTHENTICATE_FAILURE],
  },
});

export const logout = () => ({ type: types.LOGOUT });
