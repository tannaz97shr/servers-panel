import { IServerInfo } from "../../models/servers";

export interface IServersState {
  list: IServerInfo[];
  totalCount: number;
  loading: boolean;
}
