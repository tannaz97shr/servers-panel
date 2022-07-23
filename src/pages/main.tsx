import { useState, useEffect } from "react";

import FilterBox from "../components/filterBox/filterBox";
import { ServersAsyncActions } from "../features/servers/serversAsync";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(ServersAsyncActions.List());
  }, []);
  const { list, totalCount, loading } = useAppSelector(
    (state) => state.servers
  );
  const uptimeArray: number[] = [];
  list.forEach((server) => uptimeArray.push(server.uptime));
  const [minimumUptime, setMinimumUptime] = useState<number>(
    Math.min(...uptimeArray)
  );
  const [maximumUptime, setMaximumUptime] = useState<number>(
    Math.max(...uptimeArray)
  );
  return (
    <div>
      <FilterBox />
      main page
    </div>
  );
};

export default MainPage;
