import * as types from './actionTypes';
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from 'redux-saga/effects';

import {
  loadUsersSuccess,
  loadUsersError,
  createUserSuccess,
  createUserError,
  deleteUserSuccess,
  updateUserError,
  deleteUserError,
  searchUsersError,
  searchUsersSuccess,
  updateUserSuccess,
  filterUsersSuccess,
  filterUsersError,
  sortUsersSuccess,
  sortUsersError,
} from './actions';

import {
  createUserAPI,
  deleteUserAPI,
  loadUsersAPI,
  searchUsersAPI,
  sortUsersAPI,
  updateUserAPI,
} from './api';
import { toast } from 'react-toastify';

//PUT is used to dispatch action to store
//function PUT creates the dispatch effect
/*
 * onLoadUsersStartAsync is a Handler function responsible for the async logic (managing api)
 */
function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersAPI);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.message));
  }
}

function* onSearchUsersStartAsync({ payload: query }) {
  try {
    const response = yield call(searchUsersAPI, query);
    if (response.status === 200) {
      yield delay(500);
      yield put(searchUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(searchUsersError(error.message));
  }
}

function* onFilterUsersByStatusStartAsync({ payload }) {
  try {
    const response = yield call(searchUsersAPI, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(filterUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(filterUsersError(error.message));
  }
}

function* onSortUsersStartAsync({ payload }) {
  try {
    const response = yield call(sortUsersAPI, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(sortUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(sortUsersError(error.message));
  }
}

function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserAPI, payload);
    if (response.status === 201) {
      toast.success('User Added Successfully');
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.message));
  }
}

function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteUserAPI, userId);
    if (response.status === 200) {
      yield delay(500);
      toast.success('User Deleted Successfully');
      yield put(deleteUserSuccess(userId));
    }
  } catch (error) {
    console.log(error);
    yield put(deleteUserError(error.message));
  }
}

function* onUpdateUserStartAsync({ payload }) {
  try {
    const response = yield call(updateUserAPI, payload);
    if (response.status === 200) {
      toast.success('User Updated Successfully');
      yield put(updateUserSuccess(response.data));
    }
  } catch (error) {
    yield put(updateUserError(error.message));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}
function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}
// export function* onDeleteUser() {
//   yield takeLatest(types.DELETE_USER_START, onDeleteUserStartAsync);
// }
function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}

export function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

export function* onSearchUsers() {
  yield takeLatest(types.SEARCH_USERS_START, onSearchUsersStartAsync);
}

export function* onFilterUsersByStatus() {
  yield takeLatest(types.FILTER_USERS_START, onFilterUsersByStatusStartAsync);
}

export function* onSortUsers() {
  yield takeLatest(types.SORT_USERS_START, onSortUsersStartAsync);
}

//FORK allows you to run some tasks in a parallel fashion. Forking tasks will make them non-blocking so they will run smoothly in the background
const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
  fork(onSearchUsers),
  fork(onFilterUsersByStatus),
  fork(onSortUsers),
];

//ROOT SAGA aggregates multiple Sagas to a single entry point for the sagaMiddleware to run
export default function* rootSaga() {
  yield all([...userSagas]);
}
