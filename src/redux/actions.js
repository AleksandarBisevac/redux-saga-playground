import * as types from './actionTypes';

// action takes some arguments from the components and passes them to the corresponding saga

// GET ALL USERS
export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

// CREATE A NEW USER
export const createUserStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

//UPDATE AN EXISTING USER
export const updateUserStart = (data) => ({
  type: types.UPDATE_USER_START,
  payload: data,
});

export const updateUserSuccess = (user) => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});

// DELETE USER
export const deleteUserStart = (userId) => ({
  type: types.DELETE_USER_START,
  payload: userId,
});

export const deleteUserSuccess = (userId) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});

// SEARCH USERS
export const searchUsersStart = (query) => ({
  type: types.SEARCH_USERS_START,
  payload: query,
});

export const searchUsersSuccess = (users) => ({
  type: types.SEARCH_USERS_SUCCESS,
  payload: users,
});

export const searchUsersError = (error) => ({
  type: types.SEARCH_USERS_ERROR,
  payload: error,
});

//FILTER users
export const filterUsersStart = (userStatus) => ({
  type: types.FILTER_USERS_START,
  payload: userStatus,
});

export const filterUsersSuccess = (users) => ({
  type: types.FILTER_USERS_SUCCESS,
  payload: users,
});

export const filterUsersError = (error) => ({
  type: types.FILTER_USERS_ERROR,
  payload: error,
});

//SORT users
export const sortUsersStart = (sortValue) => ({
  type: types.SORT_USERS_START,
  payload: sortValue,
});

export const sortUsersSuccess = (users) => ({
  type: types.SORT_USERS_SUCCESS,
  payload: users,
});

export const sortUsersError = (error) => ({
  type: types.SORT_USERS_ERROR,
  payload: error,
});
