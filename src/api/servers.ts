import axios, { AxiosResponse } from "axios";

const serversUrl = "functions/servers";

export const ServersList = (): Promise<AxiosResponse<any>> =>
  axios.get(`${serversUrl}`);
