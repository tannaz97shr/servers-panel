import { IServerInfo, SortbyType, SortingOrderType } from "../models/servers";

export const sortArray = (
  order: string,
  sortBy: string,
  dataSource: IServerInfo<number>[]
): IServerInfo<number>[] => {
  let sortedData: IServerInfo<number>[] = [];
  switch (sortBy) {
    case "uptime": {
      sortedData = dataSource.sort((a, b) =>
        order === "descend" ? b.uptime - a.uptime : a.uptime - b.uptime
      );
      break;
    }
    case "created": {
      sortedData = dataSource.sort((a, b) =>
        order === "descend" ? b.created - a.created : a.created - b.created
      );
      break;
    }
    case "status": {
      sortedData = dataSource.sort((a, b) =>
        order === "descend"
          ? ("" + b.status).localeCompare(a.status)
          : ("" + a.status).localeCompare(b.status)
      );
      break;
    }
  }
  return sortedData;
};

export const filterArray = (
  serverName: string | null,
  status: string[],
  cpuUtilization: string[],
  dataSource: IServerInfo<number>[]
): IServerInfo<number>[] => {
  let sortedData: IServerInfo<number>[] = dataSource;
  if (serverName) {
    sortedData = sortedData.filter((server) =>
      server.serverName.toLocaleLowerCase().includes(serverName)
    );
  }
  if (status.length) {
    sortedData = dataSource.filter((server) => {
      let isContaining = false;
      status.forEach((st) => {
        if (server.status === st) {
          isContaining = true;
        }
      });
      return isContaining;
    });
  }
  if (cpuUtilization.length) {
    sortedData = sortedData.filter(
      (server) =>
        (server.stats.cpu >
        Number(
          cpuUtilization[0]) && (server.stats.cpu < Number(cpuUtilization[1]))
        )
    );
  }
  return sortedData;
};
