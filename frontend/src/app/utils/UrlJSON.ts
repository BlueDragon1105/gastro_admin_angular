import {environment} from '../../environments/environment';

const baseUrl = environment.baseUrl;
const apiUrl = environment.apiUrl;

export const UrlJSON = {
  loginUrl: apiUrl + 'auth/login',
  orderUrl: apiUrl + 'order'
};
