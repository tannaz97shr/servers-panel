import axios, { AxiosResponse } from "axios";

const serversUrl = "functions/servers";

const List = (): Promise<AxiosResponse<any>> => axios.get(`${serversUrl}`);

export const ServersAPIa = { List };
