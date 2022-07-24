import { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";

import FilterBox from "../components/filterBox/filterBox";
import { ServersAsyncActions } from "../features/servers/serversAsync";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IServerInfo, IServersColumns } from "../models/servers";
import CountryComponent from "../components/countryLocation/country";

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(ServersAsyncActions.List());
  }, []);
  const { list, totalCount, loading } = useAppSelector(
    (state) => state.servers
  );
  const uptimeArray: number[] = [];
  const datasource: IServerInfo[] = [];

  if (list)
    list.forEach((server) => {
      uptimeArray.push(server.uptime);
      datasource.push({ ...server, key: server.id });
    });
  const [minimumUptime, setMinimumUptime] = useState<number>(
    Math.min(...uptimeArray)
  );
  const [maximumUptime, setMaximumUptime] = useState<number>(
    Math.max(...uptimeArray)
  );

  const columns: ColumnsType<IServerInfo> = [
    {
      title: "Server Name",
      dataIndex: "serverName",
      key: "serverName",
      render: (text) => <a onClick={(e) => e.preventDefault}>{text}</a>,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: text => {
        return <CountryComponent name={text} />;
      }
    },
    {
      title: "IPv4",
      dataIndex: "ipv4",
      key: "ipv4",
    },
    {
      title: "Uptime",
      dataIndex: "uptime",
      key: "uptime",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, { status, key }) => {
        const color =
          status === "online"
            ? "green"
            : status === "idle"
            ? "orange"
            : status === "offline"
            ? "volcano"
            : "gray";
        return (
          <Tag color={color} key={key}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Stats",
      children: [
        {
          title: "CPU",
          dataIndex: "cpu",
          key: "cpu",
          render: (_, item) => item.stats.cpu,
        },
        {
          title: "RAM",
          dataIndex: "ram",
          key: "ram",
          render: (_, item) => item.stats.ram,
        },
        {
          title: "Disk",
          dataIndex: "disk",
          key: "disk",
          render: (_, item) => item.stats.disk,
        },
      ],
      // dataIndex: "stats",
      // key: "stats",
      // render: (_, { stats, key }) => <StatsComponent {...stats} key={key} />,
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
  ];

  return (
    <div>
      <FilterBox />
      <Table columns={columns} dataSource={datasource} loading={loading} />
    </div>
  );
};

export default MainPage;
