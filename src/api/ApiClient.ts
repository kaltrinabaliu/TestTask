import axios from "axios";
import type { IApiClient } from "../interfaces/IApiClient";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiClient implements IApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, token?: string) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  handleSuccess(response: AxiosResponse) {
    return response;
  }

  handleError(error: any) {
    return Promise.reject(error);
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    console.log(url);
    const response: AxiosResponse<T> = await this.axiosInstance.get(
      url,
      config
    );
    return response.data;
  }

  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(
      url,
      data,
      config
    );
    return response.data;
  }

  async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(
      url,
      data,
      config
    );
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(
      url,
      config
    );
    return response.data;
  }
}
