import {http} from '../services/httpService';
import { apiUrl } from "../config";


export const getContactList = () => {
  const apiEndPoint = `${apiUrl}/users`;
  return http.get(apiEndPoint);
};

export const addContact = (data) => {
  const apiEndPoint = `${apiUrl}/users`;
  return http.post(apiEndPoint,data);
};
export const updateContact = (data) => {
  const apiEndPoint = `${apiUrl}/users/${data.id}`;
  return http.put(apiEndPoint,data);
};
export const deleteContact = (data) => {
  const apiEndPoint = `${apiUrl}/users/${data.id}`;
  return http.delete(apiEndPoint,data);
};