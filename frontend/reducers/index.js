import * as types from '../sagas/actions/types';

const initialState = {
  name: '',
  email: '',
  id: '',
  error: undefined,
  logged: false,
  success: false,
  productSuccess: false,
  productsFromUser: [],
  products: [],
  purchase: [],
  buySuccess: false
};

export const user = (state = initialState, action = null) => {
  if (action.type === types.CREATE_USER) {
    return {
      ...state,
      name: action.user.name,
      email: action.user.email,
      success: true,
    };
  } else if (action.type === types.CREATE_USER_FAIL) {
    return {
      error: { message: 'Usuario já cadastrado' },
    };
  } else if (action.type === types.UPDATE_USER_SUCCESS) {
    return {
      name: action.user.name,
      email: action.user.email,
    };
  } else if (action.type === types.LOGIN_SUCCESS) {
    return {
      ...state,
      email: action.userInfo.data.email,
      id: action.userInfo.data.id,
      name: action.userInfo.data.name,
      logged: true,
    };
  } else if (action.type === types.LOGIN_ERROR) {
    return {
      error: { message: 'Usuario ou senha incorreto' },
      logged: false,
    };
  } else if (action.type === types.GET_ALL_PRODUCTS_BY_USER_EMAIL_SUCCESS) {
    return {
      ...state,
      productsFromUser: action.products.data,
    };
  } else if (action.type === types.CREATE_PRODUCTS_SUCCESS) {
    return {
      ...state,
      productSuccess: true,
      productsFromUser: [action.product.data, ...state.productsFromUser],
    };
  } else if (action.type === types.UPDATE_PRODUCT_SUCCESS) {
    return {
      ...state,
      productSuccess: true,
      //productsFromUser: [action.product.data, ...state.productsFromUser],
    };
  } else if (action.type === types.GET_ALL_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.products.data,
    };
  } else if (action.type === types.PURCHASE_SUCCESS) {
    return {
      ...state,
      purchase: [action.product.data],
      buySuccess: true
    };
  } else if (action.type === types.GET_ALL_PURCHASE_BY_USER_ID_ACTION_SUCCESS) {
    return {
      ...state,
      purchase: action.purchase.data,
    };
  } else if (action.type === types.LOGOUT) {
    return initialState;
  } else {
    return state;
  }
};
