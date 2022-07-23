import { IServerInfo } from "../../models/servers";

export interface IServersState {
  list: IServerInfo[];
  loading: boolean;
}
