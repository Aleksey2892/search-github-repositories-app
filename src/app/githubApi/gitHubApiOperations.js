import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.github.com";
axios.defaults.headers.common["Authorization"] =
  process.env.REACT_APP_GITHUB_API_AUTH_TOKEN;

console.log(process.env.REACT_APP_GITHUB_API_AUTH_TOKEN);

export const getGithubData = createAsyncThunk(
  "githubApi/fetchData",
  async ({ searchQuery = "react", paginationValue = 1 }, thunkAPI) => {
    try {
      const { data } = await axios(
        `/search/repositories?q=${searchQuery}&page=${paginationValue}&per_page=3`,
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
