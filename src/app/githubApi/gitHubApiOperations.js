import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.github.com";
axios.defaults.headers.common["Authorization"] =
  process.env.REACT_APP_GITHUB_API_AUTH_TOKEN;

export const getGitHubRepositories = createAsyncThunk(
  "gitHubApi",
  async (
    { searchQuery = "react", paginationValue = 1, perPage = 20 },
    thunkAPI,
  ) => {
    const requestUrl = `/search/repositories?q=${searchQuery}&page=${paginationValue}&per_page=${perPage}`;
    try {
      const { data } = await axios(requestUrl);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
