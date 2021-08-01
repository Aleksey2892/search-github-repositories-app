import { configureStore } from "@reduxjs/toolkit";
import responseDataReducer from "./githubApi/gitHubApiReducers";
import requestDataReducer from "./requestData/requestDataReducers";

export const store = configureStore({
  reducer: {
    responseResult: responseDataReducer,
    requestData: requestDataReducer,
  },
});
