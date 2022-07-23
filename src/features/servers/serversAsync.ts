import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServersList } from "../../api/servers";

const List = createAsyncThunk<any, void, any>(
  "servers/list",
  async (_, { rejectWithValue }) => {
    try {
      const serversResult = await ServersList();
      return serversResult.data;
    } catch (error) {
      return rejectWithValue({ message: "Error" });
    }
  }
);
export const ServersAsyncActions = { List };
