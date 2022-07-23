import { createAsyncThunk } from "@reduxjs/toolkit";

import { ServersList } from "../../api/servers";
import { IServersRespose } from "../../models/servers";
import { ThunkAPIConfig } from "../../models/general";

const List = createAsyncThunk<IServersRespose, void, ThunkAPIConfig>(
  "servers/list",
  async (_, { rejectWithValue }) => {
    try {
      const serversResult = await ServersList();
      return serversResult.data;
    } catch (error) {
      return rejectWithValue({ message: "Error While tryong to fetch ServersList!" });
    }
  }
);
export const ServersAsyncActions = { List };
