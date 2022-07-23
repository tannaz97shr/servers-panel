import { useState, useEffect } from "react";
import type { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";

import FilterBox from "../components/filterBox/filterBox";
import {ServersAsyncActions } from "../features/servers/serversAsync";
import { Store } from "antd/lib/form/interface";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=> {
      dispatch(ServersAsyncActions.List())
  }, [])
  const [minimumUptime, setMinimumUptime] = useState<number>();
  const [maximumUptime, setMaximumUptime] = useState<number>();
  return (
    <div>
      <FilterBox />
      main page
    </div>
  );
};

export default MainPage;
