import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { getGithubData } from "./gitHubApiOperations";

export const responseDataSlice = createSlice({
  name: "responseData",
  initialState: {},

  extraReducers: {
    [getGithubData.fulfilled](state, { payload }) {
      return { ...payload };
    },
  },
});

export const responseErrorSlice = createSlice({
  name: "responseError",
  initialState: {},

  extraReducers: {
    [getGithubData.rejected](state, { payload }) {
      return { ...payload };
    },
  },
});

export const responseLoadingSlice = createSlice({
  name: "responseLoading",
  initialState: false,

  extraReducers: {
    [getGithubData.pending](_state, { _payload }) {
      return true;
    },
    [getGithubData.fulfilled](_state, { _payload }) {
      return false;
    },
    [getGithubData.rejected](_state, { _payload }) {
      return false;
    },
  },
});

export const gitHubApiActions = {
  ...responseErrorSlice.actions,
  ...responseDataSlice.actions,
  ...responseLoadingSlice.actions,
};

export default combineReducers({
  responseData: responseDataSlice.reducer,
  responseError: responseErrorSlice.reducer,
  responseLoading: responseLoadingSlice.reducer,
});
