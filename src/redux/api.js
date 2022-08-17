import axios from 'axios';
import getQueryFromProps from '../utils/getQueryFromProps';

export const loadUsersAPI = async () => {
  return await axios.get('http://localhost:5000/users');
};

export const createUserAPI = async (user) => {
  return await axios.post('http://localhost:5000/users', user);
};

export const deleteUserAPI = async (userId) => {
  return await axios.delete('http://localhost:5000/users/' + userId);
};

export const updateUserAPI = async (props) => {
  return await axios.put('http://localhost:5000/users/' + props.id, props.user);
};

export const searchUsersAPI = async (queryParams) => {
  const query = getQueryFromProps(queryParams);
  return await axios.get(`http://localhost:5000/users${query ? query : ''}`);
};

export const filterUsersByStatusAPI = async (status) => {
  return await axios.get(`http://localhost:5000/users?status=${status}`);
};
export const sortUsersAPI = async (queryParams, sort) => {
  const query = getQueryFromProps(queryParams);
  return await axios.get(
    `http://localhost:5000/users${query ? query : ''}&_sort=${
      sort.name
    }&_order=${sort.type}`
  );
};
