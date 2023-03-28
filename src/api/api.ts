import axios, { AxiosRequestConfig } from 'axios';

export default class api {
  static get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return axios.get(url, options).then((response) => response.data);
  }

  static post<T>(url: string, body: unknown, options?: AxiosRequestConfig): Promise<T> {
    return axios.post(url, body, options).then((response) => response.data);
  }

  static put<T>(url: string, body: unknown, options?: AxiosRequestConfig): Promise<T> {
    return axios.put(url, body, options).then((response) => response.data);
  }

  static delete<T>(url: string, body: unknown, options?: AxiosRequestConfig): Promise<T> {
    return axios.delete(url, options).then((response) => response.data);
  }
}
