import * as types from './types';

export const createUserAction = (user) => {
  return {
    type: types.CREATE_USER,
    user,
  };
};

export const loginAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};

export const logOutAction = () => {
  return {
    type: types.LOGOUT,
  };
};
