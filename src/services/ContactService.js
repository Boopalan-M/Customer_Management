import { http } from "./httpService";
import { apiUrl } from "../config";


export const getContactList = () => {
  const apiEndPoint = `${apiUrl}/contacts`;
  return http.get(apiEndPoint);
};

