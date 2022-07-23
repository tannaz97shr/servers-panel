import axios, { AxiosResponse } from "axios";

import { IServerInfo } from "../models/servers";

const serversUrl = "functions/servers";

export const ServersList = (): Promise<AxiosResponse<IServerInfo[]>> =>
  axios.get(`${serversUrl}`);
