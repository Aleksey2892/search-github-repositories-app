import { configureStore } from "@reduxjs/toolkit";
import responseResultReducer from "./githubApi/gitHubApiReducers";
import requestDataReducer from "./requestData/requestDataReducers";

export const store = configureStore({
  reducer: {
    responseResult: responseResultReducer,
    requestData: requestDataReducer,
  },
});
