
export type StatusType = "online" | "offline" | "idle";

export interface IStats {
  cpu: number;
  ram: number;
  disk: number;
}

export interface IServerInfo {
  id: number;
  serverId: string;
  serverName: string;
  location: string;
  ipv4: string;
  uptime: number;
  status: StatusType;
  created: string;
  key: number;
  stats: IStats;
}

export interface IServersRespose {
  data: IServerInfo[];
  totalCount: number;
}

export interface IServersColumns {
  serverName: string;
  location: string;
  ipv4: string;
  uptime: number;
  status: StatusType;
  stats: IStats;
  created: string;
}