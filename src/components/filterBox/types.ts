import { StatusType } from "../../models/servers";

export interface IFilterFormValues {
  serverName?: string;
  status?: StatusType;
  cpuUtilization?: number;
}
