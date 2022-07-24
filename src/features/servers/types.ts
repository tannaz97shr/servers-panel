import { IServerInfo } from "../../models/servers";

export interface IServersState {
  list: IServerInfo<string>[];
  totalCount: number;
  loading: boolean;
}
