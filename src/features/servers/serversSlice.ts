import { createSlice } from "@reduxjs/toolkit";
import { ServersAsyncActions } from "./serversAsync";

const initialState: any = {
  list: [],
  loading: false,
};

export const serversSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ServersAsyncActions.List.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ServersAsyncActions.List.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(ServersAsyncActions.List.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
  },
});
export const serversActions = serversSlice.actions;
export default serversSlice.reducer;
