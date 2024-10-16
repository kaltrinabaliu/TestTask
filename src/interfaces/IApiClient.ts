import type { AxiosRequestConfig } from "axios";

export interface IApiClient {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}
