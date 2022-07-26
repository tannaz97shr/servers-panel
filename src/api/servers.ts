import axios, { AxiosResponse } from "axios";

import { IServersRespose } from "../models/servers";

const serversUrl = "functions/servers";

export const ServersList = (): Promise<AxiosResponse<IServersRespose>> =>
  axios.get(`${serversUrl}`);
