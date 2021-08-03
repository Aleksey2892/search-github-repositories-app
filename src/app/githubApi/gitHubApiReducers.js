import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { getGitHubRepositories } from "./gitHubApiOperations";

const initialState = {};

const responseDataSlice = createSlice({
  name: "data",
  initialState,

  reducers: {},

  extraReducers: {
    [getGitHubRepositories.fulfilled](_state, { payload }) {
      return { ...payload };
    },
  },
});

const responseErrorSlice = createSlice({
  name: "error",
  initialState,

  reducers: {},

  extraReducers: {
    [getGitHubRepositories.rejected](_state, { payload }) {
      return { ...payload };
    },
    [getGitHubRepositories.fulfilled](_state, { _payload }) {
      return initialState;
    },
  },
});

const responseLoadingSlice = createSlice({
  name: "loading",
  initialState: false,

  reducers: {
    setLoadingTrue: (_state, { _payload }) => {
      return true;
    },
    setLoadingFalse: (_state, { _payload }) => {
      return false;
    },
  },

  extraReducers: {
    [getGitHubRepositories.pending](_state, { _payload }) {
      return true;
    },
    [getGitHubRepositories.fulfilled](_state, { _payload }) {
      return false;
    },
    [getGitHubRepositories.rejected](_state, { _payload }) {
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
