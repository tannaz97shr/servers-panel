import { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { useSearchParams } from "react-router-dom";

import FilterBox from "../components/filterBox/filterBox";
import { ServersAsyncActions } from "../features/servers/serversAsync";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IServerInfo, SortbyType, SortingOrderType } from "../models/servers";
import CountryComponent from "../components/countryLocation/country";
import SortingBox from "../components/sortingBox/sortingBox";
import { MainPageContainerStyled } from "./styled";
import { uptime } from "process";

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(ServersAsyncActions.List());
  }, []);
  const { list, totalCount, loading } = useAppSelector(
    (state) => state.servers
  );
  let [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  console.log("searchParams", sortBy);
  const initialDatasource: IServerInfo<number>[] = [];
  let sortedDatasource: IServerInfo<number>[] = [];
  const [isSorting, setIsSorting] = useState(sortBy ? true : false);
  if (list)
    list.forEach((server) => {
      const createdDate = new Date(server.created);
      initialDatasource.push({
        ...server,
        key: server.id,
        created: createdDate.getTime() / 1000,
      });
    });
    if(isSorting) {
      if(sortBy === "uptime") {
        sortedDatasource = initialDatasource.sort((a, b) => a.uptime - b.uptime)
      } else if(sortBy === "status") {
        sortedDatasource = initialDatasource.sort((a, b) => ('' + a.status).localeCompare(b.status))
      } else if(sortBy ===  "created") {
        sortedDatasource = initialDatasource.sort((a, b) => a.created - b.created)
      }
      
    }
  // const [dataSource, setDataSource] = useState<IServerInfo<number>[]>(initialDatasource);
  // const sortedArray = initialDatasource.sort((a, b) => a.created - b.created);
  // const [minimumUptime, setMinimumUptime] = useState<number>(
  //   Math.min(...uptimeArray)
  // );
  // const [maximumUptime, setMaximumUptime] = useState<number>(
  //   Math.max(...uptimeArray)
  // );

  // const sortData = (sortby:SortbyType, order: SortingOrdetType) => {
  //   let tempArray = dataSource;
  //   if(order === "accending") {
  //     setDataSource([...tempArray.sort((a, b) => a[sortby] - b[sortby])])
  //   } else if
  // }

  // const sortByUptime = (order: SortingOrdetType) => {
  //   let tempArray = dataSource;
  //   if (order === "accending") {
  //     setDataSource([...tempArray.sort((a, b) => a.uptime - b.uptime)])
  //   }
  // }
  // const sortByStatus = (order: SortingOrdetType) => {};
  // const sortByCreated = (order: SortingOrdetType) => {};

  const columns: ColumnsType<IServerInfo<number>> = [
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
      render: (text) => {
        return <CountryComponent name={text} />;
      },
    },
    {
      title: "IPv4",
      dataIndex: "ipv4",
      key: "ipv4",
    },
    {
      title: "Uptime (Days)",
      dataIndex: "uptime",
      key: "uptime",
      render: (seconds) => Math.round(seconds / 86400),
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
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
      render: (_, { created }) => {
        const date = new Date(created * 1000);
        return `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`;
      },
    },
  ];

  return (
    <MainPageContainerStyled>
      <FilterBox />
      <SortingBox />
      <Table
        columns={columns}
        dataSource={initialDatasource}
        loading={loading}
        // showSorterTooltip={false}
      />
    </MainPageContainerStyled>
  );
};

export default MainPage;
