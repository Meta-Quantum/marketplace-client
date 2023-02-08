import { combineReducers } from 'redux';
import * as reducersProduct from './productReducer';
import * as reducersUser from './userReducer';

export const reducer = combineReducers({
  productsList: reducersProduct.productListReducer,
  createdProduct: reducersProduct.productCreateReducer,
  deletedProduct: reducersProduct.productDeleteReducer,
  updatedProduct: reducersProduct.productUpdateReducer,
  detailedProduct: reducersProduct.productDetailsReducer,

  userSignin: reducersUser.userSigninReducer,
  userRegister: reducersUser.userRegisterReducer,
  userDetails: reducersUser.userDetailsReducer,
  userUpdateProfile: reducersUser.userUpdateProfileReducer,
  userUpdate: reducersUser.userUpdateReducer,
  userList: reducersUser.userListReducer,
  userDelete: reducersUser.userDeleteReducer,
});
