import * as types from './actionTypes';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    //START
    case types.LOAD_USERS_START:
    case types.CREATE_USER_START:
    case types.DELETE_USER_START:
    case types.UPDATE_USER_START:
    case types.SEARCH_USERS_START:
    case types.FILTER_USERS_START:
    case types.SORT_USERS_START:
      return { ...state, loading: true };
    //SUCCESS
    case types.LOAD_USERS_SUCCESS:
    case types.SEARCH_USERS_SUCCESS:
    case types.FILTER_USERS_SUCCESS:
    case types.SORT_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_USER_SUCCESS:
      let filteredUsersByDelete = [...state.users].filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredUsersByDelete,
        loading: false,
      };
    case types.UPDATE_USER_SUCCESS:
      let filteredUsersByUpdate = [...state.users].map((user) => {
        if (user.id === action.payload.id) return action.payload;
        return user;
      });
      return {
        ...state,
        users: filteredUsersByUpdate,
        loading: false,
      };
    //ERROR
    case types.LOAD_USERS_ERROR:
    case types.CREATE_USER_ERROR:
    case types.DELETE_USER_ERROR:
    case types.UPDATE_USER_ERROR:
    case types.SEARCH_USERS_ERROR:
    case types.FILTER_USERS_ERROR:
    case types.SORT_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
