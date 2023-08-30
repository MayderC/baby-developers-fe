import axios, { AxiosInstance } from "axios";

class Htpp {
  public client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 1000,
      headers: {
        "Content-Type": " application/json",
        Accept: "application/json",
      },
    });

    this.setInterceptorsRequest();
  }

  setInterceptorsRequest() {
    this.client.interceptors.request.use((config) => {
      if (config.url?.split("/")[1] !== "auth") console.log("set token");

      return config;
    });
  }

  setIntereptorsResponse() {}
}

export const http = new Htpp().client;
