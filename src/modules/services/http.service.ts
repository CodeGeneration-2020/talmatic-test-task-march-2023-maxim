import axios, { AxiosRequestConfig, AxiosStatic } from "axios";

export class HttpService {
  public baseUrl: string;

  public fetchingService: AxiosStatic;

  public apiVersion: string;

  constructor(
    baseUrl = process.env.REACT_APP_PUBLIC_BASE_URL,
    fetchingService: AxiosStatic = axios,
    apiVersion = "api"
  ) {
    this.baseUrl = baseUrl!;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}${this.apiVersion}/${url}`;
  }

  async get(route: string) {
    const response = await this.fetchingService.get(this.getFullApiUrl(route));
    return response.data;
  }

  async post<Type>(route: string, body: Type, params: AxiosRequestConfig = {}) {
    const response = await this.fetchingService.post(
      this.getFullApiUrl(route),
      body,
      {
        ...params,
      }
    );
    return response.data;
  }

  async put<Type>(route: string, body: Type) {
    const response = await this.fetchingService.put(
      this.getFullApiUrl(route),
      body
    );
    return response.data;
  }

  async delete(route: string) {
    const response = await this.fetchingService.delete(
      this.getFullApiUrl(route)
    );
    return response.data;
  }
}
